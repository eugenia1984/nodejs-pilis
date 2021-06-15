# Instlando Chocolatey

Para evitar que tu computadora no soporte virtualizar vamos a tener **Chocolatey** que te va a permitir instalar otro software, es un administrador de paquetse para windows.<bt>
Hacer CLICK en **INSTALL NOW** ó **GET STARTED**y están las explicaciones de instalación. <br>

Con **PowerShell** te debés de asegurar que ```Get-ExecutionPolicy``` no esté **Restricited**.<br>
Sugerimos usar  ```Bypass``` para pasar la politica para tenerlo instalado o ```AllSigned``` para mayor seguridad.<br>
Corre ```Get-ExecutionPolicy```. Si resulta:  **Restricted**, tentonces corre ```Set-ExecutionPolicy AllSigned``` o ```Set-ExecutionPolicy Bypass -Scope Process```.<br>
Después corre el siguiente comando: <br>
```Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))```<br>
Espera unos segundos para que el comando se complete. Si no ves errores estás listo para usar **Chocolatey**!.<br>
Tipea ```choco``` o ```choco -?```<br>
Asi con esto vamos a poder instalar PHP, COmposer, MySQL, Laravel, etc.

# Instalando Node
```choco install nodejs.install```<br>
Y voy a ver: <br>
```
Chocolatey v0.10.15
Installing the following packages:
nodejs.install
By installing you accept licenses for the packages.

nodejs.install v16.2.0 [Approved]
nodejs.install package files install completed. Performing other installation steps.
The package nodejs.install wants to run 'chocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint):
```
Ponemos la **A** que es si a todo y **ENTER**<br> 
Y ya me va a instalar la version de bit que yo necesito, puede demorar unos minutos.<br>
Si se instaló ok:<br>
```
The install of nodejs.install was successful.
  Software installed as 'msi', install location is likely default.

Chocolatey installed 1/1 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
```
Para provar que esté ok:<br> 
```
node -v
```
Y me muestra la version<br>
```
npm -v
```
Y veo la versión de npm que instalé:
```
npm notice
npm notice New minor version of npm available! 7.13.0 -> 7.14.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v7.14.0
npm notice Run npm install -g npm@7.14.0 to update!
npm notice
7.13.0
```


