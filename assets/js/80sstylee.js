// MY FONTS
/*
font-family: 'Rig Shaded Bold Shadow'
font-family: 'Rig Shaded Bold Inline'
font-family: 'Rig Shaded Bold Face'
font-family: 'Rig Shaded Bold Shading Coarse'
font-family: 'Rig Shaded Bold Extrude'
font-family: 'Rig Shaded Bold Shading Fine'
*/

(function() {
        var path = '//easy.myfonts.net/v2/js?sid=301600(font-family=Rig+Shaded+Bold+Shadow)&sid=301603(font-family=Rig+Shaded+Bold+Shading+Fine)&sid=301602(font-family=Rig+Shaded+Bold+Inline)&sid=301605(font-family=Rig+Shaded+Bold+Extrude)&sid=301604(font-family=Rig+Shaded+Bold+Face)&sid=301606(font-family=Rig+Shaded+Bold+Shading+Coarse)&key=WLXLrpyfD4',
            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
            trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = protocol + path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(trial);
    })();