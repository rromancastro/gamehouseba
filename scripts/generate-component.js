//npm.cmd run generate:component -- 
//npm.cmd run generate:section --


const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const componentsRoot = path.join(rootDir, "app", "components");
const sassRoot = path.join(rootDir, "app", "sass", "components");
const componentsIndexPath = path.join(componentsRoot, "index.js");
const stylesPath = path.join(rootDir, "app", "sass", "styles.scss");

const rawArgs = process.argv.slice(2);
const positionalArgs = rawArgs.filter((arg) => !arg.startsWith("--"));
const options = new Set(rawArgs.filter((arg) => arg.startsWith("--")));

const componentName = positionalArgs[0];
const folderArg = positionalArgs[1] || "";
const isDryRun = options.has("--dry-run");

if (!componentName) {
  console.error(
    "Uso: npm run generate:component -- NombreDelComponente [sub/carpeta] [--dry-run]"
  );
  process.exit(1);
}

if (!/^[A-Z][A-Za-z0-9]*$/.test(componentName)) {
  console.error(
    "El nombre del componente debe estar en PascalCase y solo usar letras o numeros. Ejemplo: HeroCard"
  );
  process.exit(1);
}

const normalizedFolder = folderArg
  .replace(/\\/g, "/")
  .replace(/^\/+|\/+$/g, "")
  .trim();

const folderSegments = normalizedFolder
  ? normalizedFolder.split("/").filter(Boolean)
  : [];

const exportPath = `./${[...folderSegments, componentName].join("/")}`;
const scssName = `${componentName.charAt(0).toLowerCase()}${componentName.slice(1)}`;
const styleUsePath = `./components/${[...folderSegments, scssName].join("/")}`;

const componentDir = path.join(componentsRoot, ...folderSegments);
const sassDir = path.join(sassRoot, ...folderSegments);
const componentPath = path.join(componentDir, `${componentName}.jsx`);
const scssPath = path.join(sassDir, `_${scssName}.scss`);

function ensureInsideRoot(targetPath, expectedRoot) {
  const relativePath = path.relative(expectedRoot, targetPath);
  return relativePath && !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
}

function createDirIfNeeded(dirPath) {
  if (fs.existsSync(dirPath) || isDryRun) {
    return;
  }

  fs.mkdirSync(dirPath, { recursive: true });
}

function writeFile(filePath, content) {
  if (fs.existsSync(filePath)) {
    throw new Error(`El archivo ya existe: ${path.relative(rootDir, filePath)}`);
  }

  if (!isDryRun) {
    fs.writeFileSync(filePath, content, "utf8");
  }
}

function insertLineIfMissing(filePath, line, anchorPattern) {
  const currentContent = fs.readFileSync(filePath, "utf8");
  if (currentContent.includes(line)) {
    return false;
  }

  let nextContent = currentContent;

  if (anchorPattern) {
    const match = currentContent.match(anchorPattern);
    if (match && typeof match.index === "number") {
      const insertAt = match.index + match[0].length;
      nextContent =
        currentContent.slice(0, insertAt) + `${line}\n` + currentContent.slice(insertAt);
    } else {
      nextContent = `${currentContent.trimEnd()}\n${line}\n`;
    }
  } else {
    nextContent = `${currentContent.trimEnd()}\n${line}\n`;
  }

  if (!isDryRun) {
    fs.writeFileSync(filePath, nextContent, "utf8");
  }

  return true;
}

if (!ensureInsideRoot(componentPath, componentsRoot) || !ensureInsideRoot(scssPath, sassRoot)) {
  console.error("La carpeta indicada queda fuera de las rutas permitidas del proyecto.");
  process.exit(1);
}

const componentFile = `export const ${componentName} = () => {
    return (
        <section id="${scssName}">
            <h2>${componentName}</h2>
        </section>
    );
};
`;

const scssFile = `#${scssName} {
}
`;

try {
  createDirIfNeeded(componentDir);
  createDirIfNeeded(sassDir);
  writeFile(componentPath, componentFile);
  writeFile(scssPath, scssFile);

  const exportAdded = insertLineIfMissing(
    componentsIndexPath,
    `export * from "${exportPath}";`
  );
  const styleAdded = insertLineIfMissing(
    stylesPath,
    `@use "${styleUsePath}";`,
    /(@use\s+"\.\/components\/.*";\r?\n)+/
  );

  const modeLabel = isDryRun ? "[dry-run] " : "";
  console.log(`${modeLabel}Componente: ${path.relative(rootDir, componentPath)}`);
  console.log(`${modeLabel}SCSS: ${path.relative(rootDir, scssPath)}`);
  console.log(
    `${modeLabel}${exportAdded ? "Export agregado" : "Export ya existia"} en ${path.relative(rootDir, componentsIndexPath)}`
  );
  console.log(
    `${modeLabel}${styleAdded ? "Import SCSS agregado" : "Import SCSS ya existia"} en ${path.relative(rootDir, stylesPath)}`
  );
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
