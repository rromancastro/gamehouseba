const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const sectionsRoot = path.join(rootDir, "app", "sections");
const sassRoot = path.join(rootDir, "app", "sass", "sections");
const sectionsIndexPath = path.join(sectionsRoot, "index.js");
const stylesPath = path.join(rootDir, "app", "sass", "styles.scss");

const rawArgs = process.argv.slice(2);
const positionalArgs = rawArgs.filter((arg) => !arg.startsWith("--"));
const options = new Set(rawArgs.filter((arg) => arg.startsWith("--")));

const sectionName = positionalArgs[0];
const folderArg = positionalArgs[1] || "";
const isDryRun = options.has("--dry-run");

if (!sectionName) {
  console.error(
    "Uso: npm run generate:section -- NombreDeLaSection [sub/carpeta] [--dry-run]"
  );
  process.exit(1);
}

if (!/^[A-Z][A-Za-z0-9]*$/.test(sectionName)) {
  console.error(
    "El nombre de la section debe estar en PascalCase y solo usar letras o numeros. Ejemplo: HomeSixthSection"
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

if (folderSegments.length === 0) {
  console.error("Tenes que indicar la carpeta de la section. Ejemplo: home o recoleta");
  process.exit(1);
}

const exportPath = `./${[...folderSegments, sectionName].join("/")}`;
const scssName = `${sectionName.charAt(0).toLowerCase()}${sectionName.slice(1)}`;
const styleUsePath = `./sections/${[...folderSegments, scssName].join("/")}`;

const sectionDir = path.join(sectionsRoot, ...folderSegments);
const sassDir = path.join(sassRoot, ...folderSegments);
const sectionPath = path.join(sectionDir, `${sectionName}.jsx`);
const scssPath = path.join(sassDir, `_${scssName}.scss`);

function ensureInsideRoot(targetPath, expectedRoot) {
  const relativePath = path.relative(expectedRoot, targetPath);
  return !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
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

if (!ensureInsideRoot(sectionPath, sectionsRoot) || !ensureInsideRoot(scssPath, sassRoot)) {
  console.error("La carpeta indicada queda fuera de las rutas permitidas del proyecto.");
  process.exit(1);
}

const sectionFile = `export const ${sectionName} = () => {
    return (
        <section id="${scssName}">
            <h2>${sectionName}</h2>
        </section>
    );
};
`;

const scssFile = `.${scssName} {
}
`;

try {
  createDirIfNeeded(sectionDir);
  createDirIfNeeded(sassDir);
  writeFile(sectionPath, sectionFile);
  writeFile(scssPath, scssFile);

  const exportAdded = insertLineIfMissing(
    sectionsIndexPath,
    `export * from "${exportPath}";`
  );
  const styleAdded = insertLineIfMissing(
    stylesPath,
    `@use "${styleUsePath}";`,
    /(@use\s+"\.\/sections\/.*";\r?\n)+/
  );

  const modeLabel = isDryRun ? "[dry-run] " : "";
  console.log(`${modeLabel}Section: ${path.relative(rootDir, sectionPath)}`);
  console.log(`${modeLabel}SCSS: ${path.relative(rootDir, scssPath)}`);
  console.log(
    `${modeLabel}${exportAdded ? "Export agregado" : "Export ya existia"} en ${path.relative(rootDir, sectionsIndexPath)}`
  );
  console.log(
    `${modeLabel}${styleAdded ? "Import SCSS agregado" : "Import SCSS ya existia"} en ${path.relative(rootDir, stylesPath)}`
  );
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
