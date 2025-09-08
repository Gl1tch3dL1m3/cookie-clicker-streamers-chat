Game.registerMod("streamers chat",
{
	init:function(){
        let MOD = this;

		l("wrapper").insertAdjacentHTML("beforebegin", `

        <div style="display: flex; flex-direction: column; position: fixed; background-color: black; border-style: solid; border-color: gray; border-width: 5px; width: 350px; height: 550px; z-index: 9999999;" id="streamersChat">
            <style>
                #streamersChatViewers > div
                {
                    margin-bottom: 5px;
                    word-wrap: break-word;
                }
            </style>
        
            <div id="streamersChatHandle" class="title" style="display: flex; justify-content: center; background-color: gray; padding-top: 7px auto; cursor: grab">Chat</div>
            <div id="streamersChatCollapser" style="position: absolute; transform: rotate(90deg);" class="title">&gt;</div>
        
            <div id="streamersChatViewers" style=" height: 100%; padding: 5px; overflow-y: auto; overflow-x: hidden;">
            </div>
        </div>
        `);
    
        const parent = l("streamersChat");
        const chat = l("streamersChatViewers");
        const handle = l("streamersChatHandle");
        const collapser = l("streamersChatCollapser");
        const shimmers = l("shimmers");

        MOD.isdragging = false;
        MOD.iscollapsed = false;
        MOD.offsetX = 0;
        MOD.offsetY = 0;
        MOD.wasscrollable = false;

        handle.addEventListener("mousedown", function(e)
        {
            MOD.isdragging = true;
            MOD.offsetX = e.clientX - parent.offsetLeft;
            MOD.offsetY = e.clientY - parent.offsetTop;
            handle.style.cursor = "grabbing";
        });

        document.addEventListener("mousemove", function(e)
        {
            if (!MOD.isdragging) return;
            parent.style.left = `${(e.clientX - MOD.offsetX < 0) ? 0 : e.clientX - MOD.offsetX}px`;
            parent.style.top = `${(e.clientY - MOD.offsetY < 0) ? 0 : e.clientY - MOD.offsetY}px`;
        });

        document.addEventListener("mouseup", function()
        {
            MOD.isdragging = false;
            handle.style.cursor = "grab";
        });

        AddEvent(collapser, "click", function()
        {
            if (MOD.iscollapsed)
            {
                MOD.iscollapsed = false;
                collapser.style.transform = "rotate(90deg)";
                chat.style.display = "initial";
                parent.style.height = "550px";
                chat.scrollTop = chat.scrollHeight;
            }

            else
            {
                MOD.iscollapsed = true;
                collapser.style.transform = "rotate(0deg)";
                chat.style.display = "none";
                parent.style.height = "28px";
            }
        });

        const PURPLE = "#9147FF";
        const ORANGE = "#FF4500";
        const BLUE = "#1E90FF";
        const GREEN = "#00FF7F";
        const YELLOW = "#FFD700";
        const PINK = "#FF69B4";
        const DARK_PURPLE = "#8A2BE2";
        const RED = "#FF6347";
        const TURQUOISE = "#40E0D0";
        const LIGHT_GREEN = "#ADFF2F";
        
        const users = [
            [PURPLE, "BananaRocket42"],
            [ORANGE, "xXShadowMuffinXx"],
            [BLUE, "PixelPanda77"],
            [GREEN, "GlitchyToast"],
            [YELLOW, "TurboNoodle9000"],
            [PINK, "QuantumFart"],
            [DARK_PURPLE, "LumpyDuckling"],
            [RED, "Z3phyrK1ng"],
            [TURQUOISE, "FuzzyPickle"],
            [LIGHT_GREEN, "N00bSlayerX"],
            [PINK, "AstroSloth"],
            [BLUE, "BubblewrapHero"],
            [PURPLE, "CrazyKoala99"],
            [YELLOW, "QwertyPirate"],
            [ORANGE, "DiscoPotatoX"],
            [DARK_PURPLE, "RandomHex42"],
            [GREEN, "SnuggleMonster"],
            [RED, "VortexChicken"],
            [LIGHT_GREEN, "L33tLlama"],
            [PINK, "SassySocks77"],
            [BLUE, "NeonBananaX"],
            [PURPLE, "GlimmerGhost"],
            [YELLOW, "TurboPenguin123"],
            [ORANGE, "F1zzBuzz"],
            [TURQUOISE, "WaffleWizard"],
            [RED, "XyloFunk99"],
            [GREEN, "SnarkyNinja"],
            [DARK_PURPLE, "PixelatedToast"],
            [PINK, "FunkySlothX"],
            [ORANGE, "CrazyMonkey42"],
            [YELLOW, "QuantumDonut"],
            [PURPLE, "MuffinOverlord"],
            [LIGHT_GREEN, "ZappyKoala77"],
            [BLUE, "NoodleWizard9000"],
            [RED, "BubbleFartX"],
            [PINK, "LlamaLover69"],
            [TURQUOISE, "SquirrelyDuck"],
            [DARK_PURPLE, "RandomBytesX"],
            [ORANGE, "DiscoNarwhal"],
            [GREEN, "P0tat0King"],
            [YELLOW, "FuzzyBaconX"],
            [PURPLE, "TurboLeprechaun"],
            [RED, "GhostlyPickle"],
            [PINK, "XtremePancake77"],
            [BLUE, "NinjaBubbleX"],
            [LIGHT_GREEN, "WackyWombat"],
            [DARK_PURPLE, "MegaSloth9000"],
            [ORANGE, "RainbowToastX"],
            [TURQUOISE, "GlitchyNoodle"],
            [YELLOW, "ZanyPixel42"]
        ];

        const chats = [
            "hi chat",
            "omg this is harder than geometry dash",
            "SO MANY COOKIES!",
            "wow",
            "don't buy wizard towers...wizards are scary",
            "bruh",
            "this game is harder than everything I went through my life",
            "wtf",
            "XD",
            "XDD",
            "XDDD",
            "hello",
            "the best game in the uni--cookieverse",
            "lol",
            "do you have any mods?",
            "brb",
            "clip that",
            "you almost died bruh...in cookie clicker",
            "cookie clicker? seriously?",
            "42 is the meaning of life",
            "lol 69",
            "y'all so cringe",
            "boooooo",
            "my fav streamer <3",
            "NOOOOOO NOT THIS GAME",
            "bro is experiencing such hard times",
            "nobody cares brotato",
            "bro",
            "hihihiha",
            "that's what I call \"skill\"!",
            "bravo",
            "vamos",
            "meh",
            "this game looks interesting...i've never seen this in my whole life lol",
            "wtf is this game",
            "toxic chat",
            "fire",
            "W",
            "W game",
            "I could watch this game all day and all night. it's just perfect.",
            "the stock market is op",
            "a",
            "yo bro",
            "how are you?",
            "who tf would use the stock market...",
            "if you show me a single useful ability from the grimoire, i'll donate 20€. i'm serious.",
            "never stop streaming this game please",
            "can we play something else?",
            "grandma is a demon btw",
            "game name?",
            "GOOOO",
            ":/",
            "this game is my childhood :o",
            "I love this game",
            "wow...you're so good at cookie clicker...you should be known as the top 1 player",
            "fun"
        ];

        const goldencookiechats = [
            "golden cookie!!!",
            "GOLD",
            "da gold",
            "omggg",
            "EYYY",
            "click it! FAST",
            "can you see it guys?",
            "it's DA GOLDEN COOKIE",
            "GOLDEN COOKIE",
            "CLICK IT",
            "come onnn",
            "let's goooooo",
            "magic",
            ":O"
        ];

        function addChat()
        {
            setTimeout(function()
            {
                const chosenuser = users[Math.floor(Math.random() * users.length)];
                const chosenchat = (document.querySelector("[alt='Golden cookie']")) ? goldencookiechats[Math.floor(Math.random() * goldencookiechats.length)] : chats[Math.floor(Math.random() * chats.length)];

                if (chat.children.length == 100)
                    chat.removeChild(chat.firstElementChild);

                chat.insertAdjacentHTML("beforeend", `
                    <div>
                    <span style="color: ${chosenuser[0]};">${chosenuser[1]}</span>: ${chosenchat}
                    </div>
                `);
                
                if (chat.scrollTop + chat.clientHeight >= chat.scrollHeight - chat.lastElementChild.scrollHeight - 4 || (!wasscrollable && chat.scrollHeight > chat.clientHeight))
                    chat.scrollTop = chat.scrollHeight;

                wasscrollable = chat.scrollHeight > chat.clientHeight;

            }, Math.random() * 1400);
        }

        setInterval(addChat, 600);
	}
});
