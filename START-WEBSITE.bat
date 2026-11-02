@echo off
setlocal
cd /d "%~dp0"
start "Sentinel Backend" /min node backend\server.js
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:3000/"
endlocal
