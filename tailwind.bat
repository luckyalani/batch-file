@echo off
echo Want to install Tailwind? Press Enter:
pause
npm install -D tailwindcss && (
echo tailwind css install success
echo Initialize config. Press Enter:
pause
npx tailwindcss init
) || (
echo Tailwind install failed!
pause
)
pause

