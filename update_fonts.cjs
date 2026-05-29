const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function findFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findFiles(fullPath, files);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      files.push(fullPath);
    }
  });
  return files;
}

const files = findFiles(directoryPath);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Replace css font-size smaller than 1.05rem
  content = content.replace(/font-size:\s*(0\.\d+|1(?:\.0[0-4])?)(rem|em)/g, 'font-size: 1.05$2');
  
  // Replace css font-size 10px-16px
  content = content.replace(/font-size:\s*(1[0-6])px/g, 'font-size: 1.05rem');
  
  // Replace jsx fontSize smaller than 1.05rem
  content = content.replace(/fontSize:\s*['"](0\.\d+|1(?:\.0[0-4])?)(rem|em)['"]/g, "fontSize: '1.05$2'");
  
  // Replace jsx fontSize 10px-16px
  content = content.replace(/fontSize:\s*['"](1[0-6])px['"]/g, "fontSize: '1.05rem'");

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
  }
});
