var modAPI_GreenheartGames = {};
(function () {
    modAPI_GreenheartGames.path = GDT.getRelativePath();
    //this is the default modding API module that is loaded as the first mod and provides convenience methods for other mods.
    //generally methods are added to the global object GDT.
    var ready = function () {
        //example calls

        //Examples.addTopic();
        //Examples.addPlatform();
        //Examples.addEvent();
        //Examples.addResearch();

        GDT.addTopics([
            {
                id: "Party Game",
                name: "Party Game".localize("game topic"),
                genreWeightings: [.6, 0.7, .9, 1, .8, .7],
                audienceWeightings: [0.9, 0.9, 1]
            }
        ]);


    };

    var error = function () {
    };

    GDT.loadJs([modAPI_GreenheartGames.path + '/helpers/checks.js',
    modAPI_GreenheartGames.path + '/api/persistence.js',
    modAPI_GreenheartGames.path + '/api/events.js',
    modAPI_GreenheartGames.path + '/api/platforms.js',
    modAPI_GreenheartGames.path + '/api/topics.js',
    modAPI_GreenheartGames.path + '/api/research.js',
    modAPI_GreenheartGames.path + '/examples/examples.js'
    ], ready, error);
})();