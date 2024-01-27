// DARK MODE BASED ON EVERTON STACK
document.addEventListener('DOMContentLoaded', function() {
    const themes = {
        light: {
            background: 'white',
            text: 'black',
            backgroundHover: 'rgba(108, 117, 125, 0.2)',
        },
        dark: {
            background: 'var(--bs-gray-dark)',
            text: 'white',
            backgroundHover: 'rgb(255, 255, 255, 0.2)',
        }
    };

    function setTheme(newTheme) {
        const themeColors = themes[newTheme];

        Object.keys(themeColors).map(function(key) {
            document.documentElement.style.setProperty(`--${key}`, themeColors[key]);
        });

        localStorage.setItem('theme', newTheme);
    }

    const darkModeToggle = document.querySelector('input[name=theme]');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function({ target }) {
            setTheme( target.checked ? 'dark' : 'light' );
        });
    }

    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light');
    setTheme(theme);

    const deviceDate = new Date();
    const deviceHours = deviceDate.getHours();

    if (theme === 'dark' && darkModeToggle) {
        darkModeToggle.checked = true;
    } else if (theme === 'light' && darkModeToggle) {
        darkModeToggle.checked = false;
    } else if (deviceHours >= 18 || deviceHours < 6) {
        setTheme('dark');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    } else {
        setTheme('light');
        if (darkModeToggle) {
            darkModeToggle.checked = false;
        }
    }
});
// END DARK MODE