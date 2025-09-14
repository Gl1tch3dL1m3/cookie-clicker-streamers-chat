Game.registerMod("streamers chat",
{
	init:function(){
        let MOD = this;

        MOD.PURPLE = "#9147FF";
        MOD.ORANGE = "#FF4500";
        MOD.BLUE = "#1E90FF";
        MOD.GREEN = "#00FF7F";
        MOD.YELLOW = "#FFD700";
        MOD.PINK = "#FF69B4";
        MOD.DARK_PURPLE = "#8A2BE2";
        MOD.RED = "#FF6347";
        MOD.TURQUOISE = "#40E0D0";
        MOD.LIGHT_GREEN = "#ADFF2F";

		l("wrapper").insertAdjacentHTML("beforebegin", `

        <div style="display: flex; flex-direction: column; position: fixed; background-color: black; border-style: solid; border-radius: 15px; border-color: gray; border-width: 5px; width: 350px; height: 535px; z-index: 9999999;" id="streamersChat">
            <style>
                #streamersChatHandle
                {
                    display: flex;
                    justify-content: center;
                    background-color: gray;
                    cursor: grab;
                }

                #streamersChatCollapser
                {
                    position: absolute;
                    transform: rotate(90deg);
                }

                #streamersChatViewers
                {
                    height: 100%;
                    padding: 5px;
                    overflow: hidden auto;
                }

                #streamersChatViewers > div > div
                {
                    margin-bottom: 5px;
                    word-wrap: break-word;
                    font-family: Tahoma;
                    color: black;
                }

                #streamersChatViewers > div > img
                {
                    height: 13px;
                    width : 13px;
                    float: left;
                    padding-right: 3px;
                }

                #streamersChatInput
                {
                    font-family: Tahoma;
                    height: 25px;
                    background-color: rgb(36, 36, 36);
                    border-style: solid;
                    border-radius: 10px;
                    border-color: dimgray;
                    margin: 5px;
                    color: white;
                }

                #streamersChatInput:focus
                {
                    outline: none;
                    border-color: white;
                }

                .streamersChatViewerChat
                {
                    color: white;
                }

                .streamersChatStreamerChat
                {
                    color: #ed3232;
                }

                .streamersChatModeratorChat
                {
                    color: green;
                }
            </style>
        
            <div id="streamersChatHandle" class="title">Chat</div>
            <div id="streamersChatCollapser" class="title">&gt;</div>
            
            <div id="streamersChatViewers">
                <div style="text-align: center; margin-bottom: 5px">
                    Welcome to your chat! You can interact with your chat by typing into the box at the bottom! Type /help to show all commands! Thank you for using my mod! &lt;3
                </div>
            </div>

            <input id="streamersChatInput" disabled="disabled" placeholder="Type a message...">
        </div>
        `);

        MOD.parent = l("streamersChat");
        MOD.chat = l("streamersChatViewers");
        MOD.handle = l("streamersChatHandle");
        MOD.collapser = l("streamersChatCollapser");
        MOD.input = l("streamersChatInput");

        MOD.theme = "";
        MOD.isdragging = false;
        MOD.iscollapsed = false;
        MOD.offsetX = 0;
        MOD.offsetY = 0;
        MOD.wasscrollable = false;

        MOD.handle.addEventListener("mousedown", function(e)
        {
            MOD.isdragging = true;
            MOD.offsetX = e.clientX - MOD.parent.offsetLeft;
            MOD.offsetY = e.clientY - MOD.parent.offsetTop;
            MOD.handle.style.cursor = "grabbing";
        });

        document.addEventListener("mousemove", function(e)
        {
            if (!MOD.isdragging) return;
            MOD.parent.style.left = `${(e.clientX - MOD.offsetX < 0) ? 0 : e.clientX - MOD.offsetX}px`;
            MOD.parent.style.top = `${(e.clientY - MOD.offsetY < 0) ? 0 : e.clientY - MOD.offsetY}px`;
        });

        document.addEventListener("mouseup", function()
        {
            MOD.isdragging = false;
            MOD.handle.style.cursor = "grab";
        });

        AddEvent(MOD.collapser, "click", function()
        {
            if (MOD.iscollapsed)
            {
                MOD.iscollapsed = false;
                MOD.collapser.style.transform = "rotate(90deg)";

                MOD.chat.style.display = "initial";
                MOD.input.style.display = "initial";

                MOD.parent.style.height = "535px";
                MOD.chat.scrollTop = MOD.chat.scrollHeight;
            }

            else
            {
                MOD.iscollapsed = true;
                MOD.collapser.style.transform = "rotate(0deg)";

                MOD.chat.style.display = "none";
                MOD.input.style.display = "none";

                MOD.parent.style.height = "28px";
            }
        });

        MOD.input.addEventListener("keydown", function(e)
        {
            if (e.key === "Enter" && MOD.input.value != "")
            {
                MOD.addChat(MOD.input.value, MOD.streamer, [0]);
                MOD.input.value = "";
            }
        });

        MOD.users = [
            [MOD.PURPLE, "BananaRocket42"],
            [MOD.ORANGE, "xXShadowMuffinXx"],
            [MOD.BLUE, "PixelPanda77"],
            [MOD.GREEN, "GlitchyToast"],
            [MOD.YELLOW, "TurboNoodle9000"],
            [MOD.PINK, "QuantumFart"],
            [MOD.DARK_PURPLE, "LumpyDuckling"],
            [MOD.RED, "Z3phyrK1ng"],
            [MOD.TURQUOISE, "FuzzyPickle"],
            [MOD.LIGHT_GREEN, "N00bSlayerX"],
            [MOD.PINK, "AstroSloth"],
            [MOD.BLUE, "BubblewrapHero"],
            [MOD.PURPLE, "CrazyKoala99"],
            [MOD.YELLOW, "QwertyPirate"],
            [MOD.ORANGE, "DiscoPotatoX"],
            [MOD.DARK_PURPLE, "RandomHex42"],
            [MOD.GREEN, "SnuggleMonster"],
            [MOD.RED, "VortexChicken"],
            [MOD.LIGHT_GREEN, "L33tLlama"],
            [MOD.PINK, "SassySocks77"],
            [MOD.BLUE, "NeonBananaX"],
            [MOD.PURPLE, "GlimmerGhost"],
            [MOD.YELLOW, "TurboPenguin123"],
            [MOD.ORANGE, "F1zzBuzz"],
            [MOD.TURQUOISE, "WaffleWizard"],
            [MOD.RED, "XyloFunk99"],
            [MOD.GREEN, "SnarkyNinja"],
            [MOD.DARK_PURPLE, "PixelatedToast"],
            [MOD.PINK, "FunkySlothX"],
            [MOD.ORANGE, "CrazyMonkey42"],
            [MOD.YELLOW, "QuantumDonut"],
            [MOD.PURPLE, "MuffinOverlord"],
            [MOD.LIGHT_GREEN, "ZappyKoala77"],
            [MOD.BLUE, "NoodleWizard9000"],
            [MOD.RED, "BubbleFartX"],
            [MOD.PINK, "LlamaLover69"],
            [MOD.TURQUOISE, "SquirrelyDuck"],
            [MOD.DARK_PURPLE, "RandomBytesX"],
            [MOD.ORANGE, "DiscoNarwhal"],
            [MOD.GREEN, "P0tat0King"],
            [MOD.YELLOW, "FuzzyBaconX"],
            [MOD.PURPLE, "TurboLeprechaun"],
            [MOD.RED, "GhostlyPickle"],
            [MOD.PINK, "XtremePancake77"],
            [MOD.BLUE, "NinjaBubbleX"],
            [MOD.LIGHT_GREEN, "WackyWombat"],
            [MOD.DARK_PURPLE, "MegaSloth9000"],
            [MOD.ORANGE, "RainbowToastX"],
            [MOD.TURQUOISE, "GlitchyNoodle"],
            [MOD.YELLOW, "ZanyPixel42"]
        ];

        MOD.chats = [
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
            "my fav streamer <3",
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
            "this game is my childhood :o",
            "I love this game",
            "wow...you're so good at cookie clicker...you should be known as the top 1 player",
            "fun",
            "such wow",
            "such gamer",
            "bet your mouse is broken because of cookie clicker",
            "do you leave cookie clicker farming during nights?",
            "/help",
            "/coinflip",
            "/say ",
            "/8ball ",
            "/dice ",
            "/gayometer"
        ];

        MOD.goldencookiechats = [
            "golden cookie!!!",
            "GOLD",
            "da gold",
            "omggg",
            "EYYY",
            "click it! FAST",
            "can you see it guys?",
            "GOLDEN COOKIE",
            "CLICK IT",
            "come onnn",
            "let's goooooo",
            "magic",
            ":O",
            "what a beautiful cookie"
        ];
	},
    save:function()
    {
		return String(JSON.stringify({"theme": this.theme}));
	},
	load:function(str)
    {
        let MOD = this;
        const data = JSON.parse(str);
        MOD.theme = (data.theme) ? data.theme : "dark";

        MOD.streamer = [MOD.RED, Game.bakeryName.replaceAll(" ", "_")];
        MOD.bot = [MOD.BLUE, "ChatManager"];

        MOD.changeTheme(MOD.theme);

        l("streamersChatInput").disabled = false;

        setInterval(function()
        {
            setTimeout(function()
            {
                const chosenuser = MOD.users[Math.floor(Math.random() * MOD.users.length)];
                let chosenchat = (document.querySelector("[alt='Golden cookie']")) ? MOD.goldencookiechats[Math.floor(Math.random() * MOD.goldencookiechats.length)] : MOD.chats[Math.floor(Math.random() * MOD.chats.length)];

                const num1 = Math.floor(Math.random() * 81);
                const num2 = Math.floor(Math.random() * 201 + num1 + 1);

                if (chosenchat.startsWith("/say"))
                    chosenchat += MOD.choose([
                        "",
                        "hi",
                        "I'm an idiot",
                        "fewkffew",
                        "fegdwcvkvew",
                        "I'm fat",
                        "schlong",
                        "hello",
                        "awesome stream",
                        "hihihiha",
                        "HOG RIDAAAA",
                        "cookie",
                        "test",
                        "123"
                    ]);

                else if (chosenchat.startsWith("/8ball"))
                {
                    chosenchat += MOD.choose([
                        "",
                        "a",
                        "are you stupid?",
                        "am I stupid?",
                        "69",
                        "say yes",
                        "say no",
                        "will you be my gf?",
                        "is " + MOD.streamer[1] + " the goat?",
                        "2+2=4",
                        "is hog rider the best?",
                        "is cookie clicker about clicking cookies?",
                        "do you like me?"
                    ]);
                }

                else if (chosenchat.startsWith("/dice"))
                    chosenchat += String(num1) + " " + String(num2);

                MOD.addChat(chosenchat, chosenuser, []);

            }, Math.random() * 1400);

        }, 600);
	},
    choose:function(arr)
    {
        return arr[Math.floor(Math.random() * arr.length)];
    },
    changeTheme:function(theme)
    {
        const switched = (theme == "dark") ? "white" : "black";
        theme = (theme == "dark") ? "black" : "white";

        this.chat.style.backgroundColor = theme;
        this.parent.style.backgroundColor = theme;
        this.chat.style.color = switched;
        this.input.style.backgroundColor = (theme == "white") ? "rgba(209, 209, 209, 1)" : "rgb(36, 36, 36)";
        this.input.style.borderColor = (theme == "white") ? "rgba(180, 180, 180, 1)" : "dimgray";
        this.input.style.color = switched;

        for (let sheet of document.styleSheets)
        {
            try
            {
                for (let rule of sheet.cssRules)
                {
                    if (rule.selectorText == "#streamersChatViewers > div > div" || rule.selectorText == ".streamersChatViewerChat")
                        rule.style.color = switched;
                }
            }
            catch (e) {}
        }
    },
    addChat:function(msg, user, badges)
    /*
    Badges:
    - 0: Streamer
    - 1: Moderator
    - 2: Bot
    
    */
    {
        // Update name if changed
        this.streamer[1] = Game.bakeryName.replaceAll(" ", "_");

        if (this.chat.children.length == 100)
            this.chat.removeChild(this.chat.firstElementChild);

        this.chat.insertAdjacentHTML("beforeend", `
            <div>
                <img style="display: ${(badges.includes(0)) ? "initial" : "none"}" src="${this.dir}/imgs/streamer.png">
                <img style="display: ${(badges.includes(1)) ? "initial" : "none"}" src="${this.dir}/imgs/moderator.png">
                <img style="display: ${(badges.includes(2)) ? "initial" : "none"}" src="${this.dir}/imgs/bot.png">
                <div>
                    <span style="color: ${user[0]};">${user[1]}</span>: <span class="${(badges.includes(0)) ? "streamersChatStreamerChat" : (badges.includes(1)) ? "streamersChatModeratorChat" : "streamersChatViewerChat"}">${msg}</span>
                </div>
            </div>
        `);
        
        if (this.chat.scrollTop + this.chat.clientHeight >= this.chat.scrollHeight - this.chat.lastElementChild.clientHeight - 20 || (!this.wasscrollable && this.chat.scrollHeight > this.chat.clientHeight))
            this.chat.scrollTop = this.chat.scrollHeight;

        this.wasscrollable = this.chat.scrollHeight > this.chat.clientHeight;

        this.botCommand(msg, user);
    },
    botCommand:function(cmd, user)
    {
        let MOD = this;

        if (user == MOD.bot)
            return;

        let args = (cmd.indexOf(" ") != -1) ? cmd.substring(cmd.indexOf(" ")+1).split(" ") : [];
        args = args.filter(function(e)
        {
            return e.trim() != "";
        });
        let argsstr = "";
        
        args.forEach(function(e)
        {
            argsstr += e + " ";
        });

        argsstr = argsstr.trim();
        cmd = cmd.toLowerCase();

        const infocmd = [ // [name, usage, info]
            ["help", "/help", "Shows a help message."],
            ["info", "/info {command name}", "Shows information about the chosen command."],
            ["theme", "/theme", "Toggles theme between WHITE and DARK."],
            ["say", "/say {text}", "Says anything you want!"],
            ["8ball", "/8ball {question}", "Answers your fateful question!"],
            ["dice", "/dice {min} {max}", "Rolls a number between {min} and {max} you choose."],
            ["coinflip", "/coinflip", "Flips a coin."],
            ["gayometer", "/gayometer", "Using quantum physics and all the wisdom in the world, it calculates what percentage of you are gay."]
        ];

        function checkBadUsage(cmdname, argsnum=null)
        {
            if (args.length == 0 || (argsnum != null && args.length != argsnum))
            {
                MOD.addChat("Invalid command usage! Please type /info " + cmdname + " for more info.", MOD.bot, [1, 2]);
                return true;
            }
            
            return false;
        }

        if (cmd == "/help")
            MOD.addChat("Hello, " + user[1] + "! I'm " + MOD.bot[1] + "! I'm designated to manage this chat! My commands are: /help, /info, /theme, /say, /8ball, /dice, /coinflip, /gayometer. If you want more info about a command, use /info (example: /info theme)!", MOD.bot, [1, 2]);

        else if (cmd.startsWith("/info"))
        {
            if (checkBadUsage("info")) return;

            for (i = 0; i < infocmd.length; i++)
            {
                if (infocmd[i][0] == args)
                {
                    const info = infocmd[i];
                    MOD.addChat(info[2] + " Usage: " + info[1], MOD.bot, [1, 2]);
                    return;
                }
            }

            MOD.addChat("Cannot find anything about that command. Make sure you don't include the command prefix (/command -> command)!", MOD.bot, [1, 2]);
        }

        else if (cmd == "/theme")
        {
            MOD.theme = (MOD.theme == "dark") ? "white" : "dark";
            MOD.addChat("Changed theme to " + (MOD.theme.toUpperCase()) + " mode!", MOD.bot, [1, 2]);
            MOD.changeTheme(MOD.theme);
        }

        else if (cmd.startsWith("/say"))
        {
            if (checkBadUsage("say")) return;
            MOD.addChat(argsstr, MOD.bot, [1, 2]);
        }

        else if (cmd.startsWith("/8ball"))
        {
            if (checkBadUsage("8ball")) return;
            MOD.addChat("Question: " + argsstr + " | Anwser: " + MOD.choose([
                "yes",
                "no",
                "I don't know",
                "maybe",
                "who knows?",
                "absolutely!",
                "hell nah",
                "probably"

            ]), MOD.bot, [1, 2]);
        }

        else if (cmd.startsWith("/dice"))
        {
            if (checkBadUsage("dice", 2)) return;
            try
            {
                const min = Number(args[0]);
                const max = Number(args[1]);
                MOD.addChat(Math.floor(Math.random() * (max - min + 1)) + min, MOD.bot, [1, 2]);
            }
            catch(e)
            {
                MOD.addChat("Invalid command usage! Please type /info dice for more info.", MOD.bot, [1, 2]);
            }
        }

        else if (cmd == "/gayometer")
            MOD.addChat("You are " + String(Math.floor(Math.random() * 101)) + "% gay!", MOD.bot, [1, 2]);

        else if (cmd == "/coinflip")
            MOD.addChat(MOD.choose(["heads", "tails"]), MOD.bot, [1, 2]);

        else if (cmd.startsWith("/"))
            MOD.addChat("Unknown command. Please type \"/help\" to show all commands!", MOD.bot, [1, 2]);
    }
});
