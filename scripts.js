var sites = [
		"https://engl149.github.io/collective/studentessays/Boddapelliautobiography/BoddapelliProjectPage.html",
              "https://engl149.github.io/collective/studentessays/Wardautobiography/WardProjectPage.html",
              "https://engl149.github.io/collective/studentessays/Suttonautobiography/SuttonProjectPage.html",
              "https://engl149.github.io/collective/studentessays/Smithautobiography/SmithProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Burnsautobiography/ProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Chiquiautobiography/ChiquiProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Davisautobiography/DavisProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Deweyautobiography/DeweyProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Dreikosenautobiography/DreikosenProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Fultonautobiography/FultonProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Guptaautobiography/GuptaProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Hicklandautobiography/HicklandProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Howardautobiography/HowardProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Landryautobiography/LandryProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Lawrenceautobiography/LawrenceProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Liuautobiography/LiuProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Lockardautobiography/LockardProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Phiriautobiography/PhiriProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Sudhakarautobiography/SudhakarProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Veerelliautobiography/VeerelliProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Wangautobiography/WangProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Wilmotautobiography/WilmotProjectPage.html",
	    "https://engl149.github.io/collective/studentessays/Zalaautobiography/ZalaProjectPage.html"
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }
