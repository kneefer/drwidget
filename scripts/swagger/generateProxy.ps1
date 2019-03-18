$codeGenExecutableName = 'openapi-generator-cli-3.3.2.jar'
$codeGenDownloadLink = "http://central.maven.org/maven2/org/openapitools/openapi-generator-cli/3.3.2/$codeGenExecutableName"
$swaggerDocLink = 'https://polpharma.herokuapp.com/api/?format=openapi'
$codeGenConfigRelativePath = 'gen-config.json'
$generatedFilesRelativePath = '../../src/app/api-proxy'
$tempDirRelativePath = 'temp'

$tempDirFullPath = Join-Path $PSScriptRoot $tempDirRelativePath
$codeGenExecutableFullPath = Join-Path $tempDirFullPath $codeGenExecutableName

if (!(Test-Path $codeGenExecutableFullPath)) {
  New-Item -ItemType Directory -Force -Path $tempDirFullPath
  Invoke-WebRequest -Uri $codeGenDownloadLink -OutFile $codeGenExecutableFullPath
}

$generatedFilesFullPath = Join-Path $PSScriptRoot $generatedFilesRelativePath -Resolve
$codeGenConfigFullPath = JOin-Path $PSScriptRoot $codeGenConfigRelativePath
& java -jar $codeGenExecutableFullPath generate -i $swaggerDocLink -l typescript-angular -o $generatedFilesFullPath -c $codeGenConfigFullPath
