/* ============================================================
   SKY TRENDS ANALYSER — Mock Data for Pitch Prototype
   Realistic UK streaming, social & calendar data
   ============================================================ */

const MOCK_DATA = {

    // ─── Date context ───
    weekOf: '17–23 February 2026',
    lastUpdated: new Date().toISOString(),

    // ─── Netflix TV Trending UK (Past Week) ───
    netflixTV: [
        { rank: 1, title: 'Adolescence', genre: 'Drama', movement: 'same', daysInChart: 14, peakPosition: 1, emoji: '🎭' },
        { rank: 2, title: 'Running Point', genre: 'Comedy', movement: 'up', change: 3, daysInChart: 7, peakPosition: 2, emoji: '😂' },
        { rank: 3, title: 'Black Mirror S7', genre: 'Sci-Fi', movement: 'new', daysInChart: 3, peakPosition: 3, emoji: '🪞' },
        { rank: 4, title: 'Zero Day', genre: 'Thriller', movement: 'down', change: 2, daysInChart: 21, peakPosition: 1, emoji: '🕵️' },
        { rank: 5, title: 'Apple Cider Vinegar', genre: 'True Crime', movement: 'up', change: 1, daysInChart: 10, peakPosition: 4, emoji: '🍎' },
        { rank: 6, title: 'Love Is Blind UK S2', genre: 'Reality', movement: 'new', daysInChart: 2, peakPosition: 6, emoji: '💕' },
        { rank: 7, title: 'The Recruit S2', genre: 'Action', movement: 'down', change: 3, daysInChart: 28, peakPosition: 2, emoji: '🔫' },
        { rank: 8, title: 'Squid Game S2', genre: 'Drama', movement: 'down', change: 5, daysInChart: 56, peakPosition: 1, emoji: '🦑' },
        { rank: 9, title: 'Mo S2', genre: 'Comedy', movement: 'up', change: 2, daysInChart: 5, peakPosition: 8, emoji: '😄' },
        { rank: 10, title: 'The Night Agent S2', genre: 'Thriller', movement: 'same', daysInChart: 35, peakPosition: 1, emoji: '🌙' }
    ],

    // ─── Netflix Film Trending UK (Past Week) ───
    netflixFilm: [
        { rank: 1, title: 'Peaky Blinders: The Movie', genre: 'Crime/Drama', movement: 'new', daysInChart: 4, peakPosition: 1, emoji: '🎩', skyLink: true },
        { rank: 2, title: 'Carry-On', genre: 'Thriller', movement: 'same', daysInChart: 42, peakPosition: 1, emoji: '✈️' },
        { rank: 3, title: 'The Accountant 2', genre: 'Action', movement: 'up', change: 1, daysInChart: 14, peakPosition: 2, emoji: '🔢' },
        { rank: 4, title: 'Prometheus', genre: 'Sci-Fi', movement: 'up', change: 5, daysInChart: 7, peakPosition: 4, emoji: '👽' },
        { rank: 5, title: 'Back in Action', genre: 'Action/Comedy', movement: 'down', change: 3, daysInChart: 28, peakPosition: 1, emoji: '💥' },
        { rank: 6, title: 'The Electric State', genre: 'Sci-Fi', movement: 'new', daysInChart: 2, peakPosition: 6, emoji: '🤖' },
        { rank: 7, title: 'Ad Vitam', genre: 'Thriller', movement: 'up', change: 2, daysInChart: 10, peakPosition: 5, emoji: '⏳' },
        { rank: 8, title: 'Dog Man', genre: 'Animation', movement: 'new', daysInChart: 1, peakPosition: 8, emoji: '🐕' },
        { rank: 9, title: 'The Platform 2', genre: 'Horror', movement: 'down', change: 4, daysInChart: 21, peakPosition: 3, emoji: '🏢' },
        { rank: 10, title: 'Hit Man', genre: 'Comedy/Crime', movement: 'down', change: 2, daysInChart: 35, peakPosition: 6, emoji: '🎯' }
    ],

    // ─── Amazon Prime Video TV & Film UK (Past Week) ───
    amazonPrime: [
        { rank: 1, title: 'Reacher S3', type: 'Series', genre: 'Action', movement: 'same', daysInChart: 14, peakPosition: 1, emoji: '💪' },
        { rank: 2, title: 'The Bondsman', type: 'Series', genre: 'Thriller', movement: 'new', daysInChart: 3, peakPosition: 2, emoji: '⛓️' },
        { rank: 3, title: 'Beast Games', type: 'Series', genre: 'Reality', movement: 'down', change: 1, daysInChart: 28, peakPosition: 1, emoji: '🏆' },
        { rank: 4, title: 'Invincible S3', type: 'Series', genre: 'Animation', movement: 'up', change: 2, daysInChart: 7, peakPosition: 3, emoji: '🦸' },
        { rank: 5, title: 'Red One', type: 'Film', genre: 'Action/Comedy', movement: 'down', change: 3, daysInChart: 42, peakPosition: 1, emoji: '🎅' },
        { rank: 6, title: 'The Idea of You', type: 'Film', genre: 'Romance', movement: 'same', daysInChart: 56, peakPosition: 2, emoji: '💭' },
        { rank: 7, title: 'Culpa Mía', type: 'Film', genre: 'Romance', movement: 'up', change: 4, daysInChart: 10, peakPosition: 5, emoji: '💔' },
        { rank: 8, title: 'Citadel: Diana', type: 'Series', genre: 'Spy/Thriller', movement: 'down', change: 2, daysInChart: 21, peakPosition: 4, emoji: '🕶️' },
        { rank: 9, title: 'The Lord of the Rings: Rings of Power S2', type: 'Series', genre: 'Fantasy', movement: 'down', change: 6, daysInChart: 70, peakPosition: 1, emoji: '💍' },
        { rank: 10, title: 'Jackpot!', type: 'Film', genre: 'Comedy', movement: 'new', daysInChart: 2, peakPosition: 10, emoji: '🎰' }
    ],

    // ─── WikiViews (Past Week — Most Viewed Entertainment Pages) ───
    wikiViews: [
        { rank: 1, title: 'Peaky Blinders (film)', views: '2.4M', change: '+340%', category: 'Film' },
        { rank: 2, title: 'Cillian Murphy', views: '1.8M', change: '+285%', category: 'Person' },
        { rank: 3, title: 'Black Mirror (series 7)', views: '1.2M', change: '+520%', category: 'TV' },
        { rank: 4, title: 'Adolescence (TV series)', views: '980K', change: '+125%', category: 'TV' },
        { rank: 5, title: 'Captain America: Brave New World', views: '870K', change: '+95%', category: 'Film' },
        { rank: 6, title: 'Reacher (TV series)', views: '650K', change: '+180%', category: 'TV' },
        { rank: 7, title: 'The Day of the Jackal (TV series)', views: '540K', change: '+45%', category: 'TV' },
        { rank: 8, title: 'Oppenheimer (film)', views: '480K', change: '+210%', category: 'Film' },
        { rank: 9, title: 'Sweetpea (TV series)', views: '420K', change: '+65%', category: 'TV' },
        { rank: 10, title: '28 Days Later', views: '390K', change: '+175%', category: 'Film' }
    ],

    // ─── TikTok Trending Hashtags UK (Past Week) ───
    tiktokUK: [
        { rank: 1, hashtag: '#PeakyBlindersMovie', views: '124M', category: 'Entertainment', trend: 'up' },
        { rank: 2, hashtag: '#BookTok', views: '98M', category: 'Books & Culture', trend: 'same' },
        { rank: 3, hashtag: '#BlackMirrorS7', views: '87M', category: 'Entertainment', trend: 'new' },
        { rank: 4, hashtag: '#GalentinesDay', views: '76M', category: 'Lifestyle', trend: 'down' },
        { rank: 5, hashtag: '#Reacher', views: '65M', category: 'Entertainment', trend: 'up' },
        { rank: 6, hashtag: '#WhatToWatch', views: '54M', category: 'Entertainment', trend: 'same' },
        { rank: 7, hashtag: '#CillianMurphy', views: '48M', category: 'Celebrity', trend: 'up' },
        { rank: 8, hashtag: '#NetflixUK', views: '42M', category: 'Entertainment', trend: 'same' },
        { rank: 9, hashtag: '#TrueDetective', views: '38M', category: 'Entertainment', trend: 'up' },
        { rank: 10, hashtag: '#Oscars2026', views: '35M', category: 'Awards', trend: 'up' }
    ],

    // ─── TikTok Trending UK News & Entertainment ───
    tiktokNewsEnts: [
        { rank: 1, hashtag: '#PeakyBlinders', views: '89M', topic: 'Peaky Blinders movie breaks Netflix records in first weekend', sentiment: 'positive' },
        { rank: 2, hashtag: '#Oscars2026', views: '67M', topic: 'Oscar nominations announced — surprises and snubs', sentiment: 'neutral' },
        { rank: 3, hashtag: '#BlackMirror', views: '52M', topic: 'Black Mirror S7 first reviews divide fans', sentiment: 'neutral' },
        { rank: 4, hashtag: '#LoveIsBlindUK', views: '44M', topic: 'Love Is Blind UK couples — who stayed together?', sentiment: 'positive' },
        { rank: 5, hashtag: '#DayOfTheJackal', views: '38M', topic: 'Day of the Jackal fans campaign for series 2', sentiment: 'positive' },
        { rank: 6, hashtag: '#Sweetpea', views: '31M', topic: 'Sweetpea star speaks on possible series return', sentiment: 'positive' },
        { rank: 7, hashtag: '#28DaysLater', views: '28M', topic: '28 Days Later sequel trailer drops — Cillian Murphy returns', sentiment: 'positive' },
        { rank: 8, hashtag: '#BAFTAs', views: '24M', topic: 'BAFTA nominations reflect diverse British talent', sentiment: 'positive' },
        { rank: 9, hashtag: '#SquidGame3', views: '21M', topic: 'Squid Game S3 confirmed for summer 2026', sentiment: 'positive' },
        { rank: 10, hashtag: '#StreamingWars', views: '18M', topic: 'Which streaming platform has the best value in the UK?', sentiment: 'neutral' }
    ],

    // ─── Upcoming Movie Releases UK (Next Month) ───
    upcomingReleases: [
        { date: '28 Feb', title: 'Snow White', genre: 'Fantasy/Musical', talent: 'Rachel Zegler, Gal Gadot', distributor: 'Disney', skyRelevance: 'low' },
        { date: '7 Mar', title: 'Mickey 17', genre: 'Sci-Fi', talent: 'Robert Pattinson, Bong Joon-ho (dir)', distributor: 'Warner Bros', skyRelevance: 'medium' },
        { date: '7 Mar', title: 'Novocaine', genre: 'Action/Comedy', talent: 'Jack Quaid, Amber Midthunder', distributor: 'Paramount', skyRelevance: 'low' },
        { date: '14 Mar', title: 'Black Bag', genre: 'Thriller', talent: 'Cate Blanchett, Michael Fassbender', distributor: 'Focus Features', skyRelevance: 'high' },
        { date: '21 Mar', title: 'A Minecraft Movie', genre: 'Adventure/Comedy', talent: 'Jason Momoa, Jack Black', distributor: 'Warner Bros', skyRelevance: 'low' },
        { date: '21 Mar', title: 'Alto Knights', genre: 'Crime/Drama', talent: 'Robert De Niro (dual role)', distributor: 'Warner Bros', skyRelevance: 'high' },
        { date: '28 Mar', title: 'Warfare', genre: 'War/Drama', talent: 'D-Day ensemble, Alex Garland (dir)', distributor: 'A24', skyRelevance: 'medium' },
        { date: '4 Apr', title: 'Thunderbolts*', genre: 'Action/Superhero', talent: 'Florence Pugh, Sebastian Stan', distributor: 'Disney/Marvel', skyRelevance: 'medium' }
    ],

    // ─── Reddit Seasonal Calendar UK (Next Month) ───
    redditCalendar: [
        { date: '1 Mar', event: 'St David\'s Day', category: 'Cultural', relevance: 'Welsh content opportunities', icon: '🏴' },
        { date: '2 Mar', event: 'Oscars Ceremony', category: 'Awards', relevance: 'Winner tie-ins to Sky catalogue', icon: '🏆' },
        { date: '6 Mar', event: 'World Book Day', category: 'Cultural', relevance: 'Book-to-screen adaptations on Sky', icon: '📚' },
        { date: '8 Mar', event: 'International Women\'s Day', category: 'Cultural', relevance: 'Female-led Sky originals spotlight', icon: '✊' },
        { date: '14–16 Mar', event: 'Six Nations Super Saturday', category: 'Sport', relevance: 'Rugby crossover content', icon: '🏉' },
        { date: '17 Mar', event: 'St Patrick\'s Day', category: 'Cultural', relevance: 'Irish talent on Sky — Murphy, Gleeson', icon: '☘️' },
        { date: '20 Mar', event: 'Spring Equinox', category: 'Seasonal', relevance: 'New season, new series push', icon: '🌸' },
        { date: '29 Mar', event: 'Boat Race', category: 'Sport', relevance: 'British tradition — nostalgic content', icon: '🚣' },
        { date: '30 Mar', event: 'BST Begins', category: 'Seasonal', relevance: 'Lighter evenings viewing habits shift', icon: '🕐' },
        { date: '14 Apr', event: 'Easter Weekend', category: 'Holiday', relevance: 'Family viewing — Sky Cinema spotlight', icon: '🐣' }
    ],

    // ─── TikTok Marketing Calendar ───
    tiktokCalendar: [
        { date: '8 Mar', event: 'International Women\'s Day', category: 'Awareness', tiktokTrend: '#WomenInFilm', potentialReach: '500M+' },
        { date: '14 Mar', event: 'Pi Day', category: 'Fun', tiktokTrend: '#PiDay #MathInMovies', potentialReach: '120M+' },
        { date: '17 Mar', event: 'St Patrick\'s Day', category: 'Cultural', tiktokTrend: '#StPatricksDay #IrishActors', potentialReach: '800M+' },
        { date: '20 Mar', event: 'First Day of Spring', category: 'Seasonal', tiktokTrend: '#SpringVibes #NewSeason', potentialReach: '350M+' },
        { date: '24 Mar', event: 'Oscar Watch Parties', category: 'Entertainment', tiktokTrend: '#OscarWatchParty', potentialReach: '450M+' },
        { date: '31 Mar', event: 'Transgender Day of Visibility', category: 'Awareness', tiktokTrend: '#TransVisibility', potentialReach: '200M+' },
        { date: '1 Apr', event: 'April Fool\'s Day', category: 'Fun', tiktokTrend: '#AprilFools #FakeTrailers', potentialReach: '900M+' },
        { date: '14 Apr', event: 'Easter Content Season', category: 'Holiday', tiktokTrend: '#EasterMovies #FamilyFilmNight', potentialReach: '600M+' }
    ],

    // ─── Ramdam TikTok Trends (Past Month) ───
    ramdamTikTok: [
        { rank: 1, trend: 'POV: You\'re a villain', engagement: '2.1B views', category: 'Entertainment', skyAngle: 'Villain characters in Sky originals' },
        { rank: 2, trend: 'What I\'d wear in [show]', engagement: '1.8B views', category: 'Fashion/TV', skyAngle: 'Day of the Jackal costume recreations' },
        { rank: 3, trend: 'Tell me a film and I\'ll rate it', engagement: '1.4B views', category: 'Film Review', skyAngle: 'Sky Cinema staff picks' },
        { rank: 4, trend: 'Unpopular film opinions', engagement: '1.1B views', category: 'Film Discussion', skyAngle: 'Controversial Sky Cinema takes' },
        { rank: 5, trend: 'Comfort show check', engagement: '890M views', category: 'TV Nostalgia', skyAngle: 'Sky Box Sets comfort picks' },
        { rank: 6, trend: 'Acting challenge duets', engagement: '750M views', category: 'Acting', skyAngle: 'Sky original cast moments' },
        { rank: 7, trend: 'Before they were famous', engagement: '680M views', category: 'Celebrity', skyAngle: 'Early roles of Sky talent' },
        { rank: 8, trend: 'Film location bucket list', engagement: '540M views', category: 'Travel/Film', skyAngle: 'Where Sky originals are filmed' }
    ],

    // ─── Ramdam Instagram Trends (Past Month) ───
    ramdamInstagram: [
        { rank: 1, trend: 'Cinematic photo dumps', engagement: '1.2B impressions', category: 'Aesthetic', skyAngle: 'Sky Cinema aesthetic reels' },
        { rank: 2, trend: 'Celebrity style breakdowns', engagement: '980M impressions', category: 'Fashion', skyAngle: 'Sky talent fashion features' },
        { rank: 3, trend: 'Mini film reviews (carousel)', engagement: '870M impressions', category: 'Film Review', skyAngle: 'Sky Cinema weekly picks carousel' },
        { rank: 4, trend: 'Behind the scenes content', engagement: '720M impressions', category: 'BTS', skyAngle: 'Sky originals production content' },
        { rank: 5, trend: 'Letterboxd lists as stories', engagement: '580M impressions', category: 'Film Culture', skyAngle: 'Curated Sky watchlists' },
        { rank: 6, trend: 'Actor filmography rankings', engagement: '460M impressions', category: 'Celebrity', skyAngle: 'Rank Sky actors\' best roles' }
    ],

    // ─── Top Performing Sky Posts (Past Week — Simulated YouScan Data) ───
    skyPosts: [
        { platform: 'Instagram', content: 'The Day of the Jackal — Every shot is a masterclass. Stream now on Sky.', engagement: '48.2K', likes: '42.1K', comments: '3.2K', shares: '2.9K', sentiment: 'positive', mediaType: 'Reel' },
        { platform: 'TikTok', content: 'POV: You just found out Mr Bigstuff is coming back 👀', engagement: '38.7K', likes: '31.4K', comments: '4.8K', shares: '2.5K', sentiment: 'positive', mediaType: 'Video' },
        { platform: 'X', content: 'Sweetpea. That ending. We need to talk. 🌸', engagement: '29.1K', likes: '18.6K', comments: '7.2K', shares: '3.3K', sentiment: 'positive', mediaType: 'Text' },
        { platform: 'Instagram', content: 'Name a more iconic duo. We\'ll wait. #WarSky', engagement: '25.4K', likes: '21.8K', comments: '2.1K', shares: '1.5K', sentiment: 'positive', mediaType: 'Carousel' },
        { platform: 'TikTok', content: 'When someone says they haven\'t watched The Day of the Jackal yet...', engagement: '22.8K', likes: '19.2K', comments: '2.4K', shares: '1.2K', sentiment: 'positive', mediaType: 'Video' }
    ],

    // ─── Sky Content Opportunities (AI-Generated Cross-References) ───
    opportunities: [
        {
            id: 1,
            urgency: 'high',
            type: 'actor',
            typeLabel: 'Actor Connection',
            trigger: {
                title: 'Peaky Blinders: The Movie',
                platform: 'Netflix',
                platformColour: '#e50914',
                detail: '#1 Film on Netflix UK — 4 days running'
            },
            skyTitles: [
                { title: 'Oppenheimer', where: 'Sky Cinema', type: 'Film' },
                { title: '28 Days Later', where: 'Sky Store', type: 'Film' },
                { title: 'Dunkirk', where: 'Sky Cinema', type: 'Film' },
                { title: 'Retreat', where: 'Sky Store', type: 'Film' }
            ],
            talent: 'Cillian Murphy',
            strategicRecommendation: 'Leverage Cillian Murphy moment — cross-promote Sky Cinema catalogue (Oppenheimer, 28 Days Later, Dunkirk) while Peaky Blinders movie drives peak interest',
            relevanceScore: 'high',
            timing: 'Immediate — trending now'
        },
        {
            id: 2,
            urgency: 'high',
            type: 'franchise',
            typeLabel: 'Franchise Link',
            trigger: {
                title: '#DayOfTheJackal trending',
                platform: 'TikTok',
                platformColour: '#ff0050',
                detail: '38M views — fans campaigning for Series 2'
            },
            skyTitles: [
                { title: 'The Day of the Jackal S1', where: 'Sky Atlantic', type: 'Series' },
                { title: 'The Day of the Jackal (1973)', where: 'Sky Cinema', type: 'Film' }
            ],
            talent: 'Eddie Redmayne',
            strategicRecommendation: 'Capitalise on #DayOfTheJackal fan campaign momentum — spotlight Sky Atlantic as the home of the series, tease S2 speculation',
            relevanceScore: 'high',
            timing: 'This week — high engagement window'
        },
        {
            id: 3,
            urgency: 'high',
            type: 'actor',
            typeLabel: 'Actor Connection',
            trigger: {
                title: '#28DaysLater sequel trailer',
                platform: 'TikTok',
                platformColour: '#ff0050',
                detail: '28M views — Cillian Murphy confirmed returning'
            },
            skyTitles: [
                { title: '28 Days Later', where: 'Sky Store', type: 'Film' },
                { title: 'Oppenheimer', where: 'Sky Cinema', type: 'Film' },
                { title: 'Peaky Blinders S1-6', where: 'Sky Box Sets', type: 'Series' }
            ],
            talent: 'Cillian Murphy',
            strategicRecommendation: 'Ride 28 Days Later sequel hype — position Sky Store as the place to rewatch the original, tie back to Murphy\'s Sky catalogue',
            relevanceScore: 'high',
            timing: 'This week — trailer momentum'
        },
        {
            id: 4,
            urgency: 'medium',
            type: 'genre',
            typeLabel: 'Genre Match',
            trigger: {
                title: 'Black Mirror S7',
                platform: 'Netflix',
                platformColour: '#e50914',
                detail: '#3 Series on Netflix UK — divisive reviews driving conversation'
            },
            skyTitles: [
                { title: 'Sweetpea', where: 'Sky Atlantic', type: 'Series' },
                { title: 'The Midwich Cuckoos', where: 'Sky Max', type: 'Series' }
            ],
            talent: 'Various',
            strategicRecommendation: 'Bridge Black Mirror dark-thriller audience to Sweetpea — genre-match positioning for Sky Atlantic originals',
            relevanceScore: 'medium',
            timing: 'Within 3 days'
        },
        {
            id: 5,
            urgency: 'medium',
            type: 'actor',
            typeLabel: 'Actor Connection',
            trigger: {
                title: 'Black Bag (cinema release 14 Mar)',
                platform: 'Cinema',
                platformColour: '#1a1a2e',
                detail: 'Upcoming Cate Blanchett/Fassbender thriller generating buzz'
            },
            skyTitles: [
                { title: 'Tár', where: 'Sky Cinema', type: 'Film' },
                { title: 'The Killer', where: 'Sky Cinema', type: 'Film' },
                { title: 'Slow Horses', where: 'Sky Atlantic', type: 'Series' }
            ],
            talent: 'Cate Blanchett, Michael Fassbender',
            strategicRecommendation: 'Pre-release Black Bag buzz — spotlight Blanchett/Fassbender catalogue on Sky Cinema (Tár, The Killer, Slow Horses)',
            relevanceScore: 'medium',
            timing: 'Week of 10 March — pre-release buzz'
        },
        {
            id: 6,
            urgency: 'medium',
            type: 'director',
            typeLabel: 'Director Connection',
            trigger: {
                title: 'Alto Knights (cinema release 21 Mar)',
                platform: 'Cinema',
                platformColour: '#1a1a2e',
                detail: 'Robert De Niro double role — mob drama generating strong interest'
            },
            skyTitles: [
                { title: 'Goodfellas', where: 'Sky Cinema', type: 'Film' },
                { title: 'The Irishman', where: 'Sky Cinema', type: 'Film' },
                { title: 'Gangs of London', where: 'Sky Atlantic', type: 'Series' }
            ],
            talent: 'Robert De Niro',
            strategicRecommendation: 'Pre-release Alto Knights anticipation — curate De Niro mob collection on Sky Cinema (Goodfellas, The Irishman)',
            relevanceScore: 'medium',
            timing: 'Week of 17 March'
        },
        {
            id: 7,
            urgency: 'low',
            type: 'genre',
            typeLabel: 'Genre Match',
            trigger: {
                title: '#Oscars2026 nominations',
                platform: 'X',
                platformColour: '#1a1a2e',
                detail: '35M+ TikTok views — award season buzz peaks'
            },
            skyTitles: [
                { title: 'Oscar-nominated films collection', where: 'Sky Cinema', type: 'Collection' },
                { title: 'The Zone of Interest', where: 'Sky Cinema', type: 'Film' },
                { title: 'Anatomy of a Fall', where: 'Sky Cinema', type: 'Film' }
            ],
            talent: 'Various nominees',
            strategicRecommendation: 'Oscars night content play — curate Sky Cinema collection of nominated films, drive tune-in around ceremony',
            relevanceScore: 'low',
            timing: 'Oscars night 2 March'
        },
        {
            id: 8,
            urgency: 'medium',
            type: 'franchise',
            typeLabel: 'Franchise Link',
            trigger: {
                title: 'Sweetpea return hints',
                platform: 'TikTok',
                platformColour: '#ff0050',
                detail: '31M views — star teases possible return'
            },
            skyTitles: [
                { title: 'Sweetpea S1', where: 'Sky Atlantic', type: 'Series' },
                { title: 'Killing Eve', where: 'Sky Box Sets', type: 'Series' }
            ],
            talent: 'Ella Purnell',
            strategicRecommendation: 'Amplify organic Sweetpea fan buzz — community engagement strategy while S2 speculation builds',
            relevanceScore: 'medium',
            timing: 'This week — riding the buzz'
        }
    ],

    // ─── Social Buzz (Entertainment Trending) ───
    socialBuzz: [
        { platform: 'x', topic: '#PeakyBlindersMovie', description: 'Fans react to the Netflix film — comparisons to the series, Cillian Murphy praise', volume: '142K posts', tags: ['Film', 'Netflix', 'Drama'] },
        { platform: 'x', topic: '#Oscars2026', description: 'Nominations announced — debates over snubs and surprises dominate', volume: '98K posts', tags: ['Awards', 'Film'] },
        { platform: 'tiktok', topic: 'POV: You\'re Tommy Shelby', description: 'Peaky Blinders movie has reignited the Tommy Shelby POV trend', volume: '89M views', tags: ['Entertainment', 'Trend'] },
        { platform: 'tiktok', topic: '#WhatToWatchUK', description: 'Creators sharing weekly streaming recommendations for UK viewers', volume: '54M views', tags: ['Recommendations', 'Streaming'] },
        { platform: 'instagram', topic: 'Day of the Jackal edits', description: 'Fan-made cinematic edits of Eddie Redmayne scenes going viral', volume: '12M impressions', tags: ['Fan Content', 'Sky Original'] },
        { platform: 'x', topic: '#BlackMirrorS7', description: 'Divided opinions — some call it the best series yet, others disagree', volume: '67K posts', tags: ['Netflix', 'Sci-Fi', 'Debate'] },
        { platform: 'tiktok', topic: '#28DaysLater', description: 'Trailer reaction videos and franchise retrospectives trending', volume: '28M views', tags: ['Horror', 'Film', 'Sequel'] },
        { platform: 'instagram', topic: 'Sweetpea fan art', description: 'Growing fan community creating art and cosplay around the Sky original', volume: '4.2M impressions', tags: ['Fan Art', 'Sky Original'] },
        { platform: 'x', topic: '#LoveIsBlindUK', description: 'UK series 2 premiere sparks massive live-tweeting and meme creation', volume: '45K posts', tags: ['Reality', 'Netflix'] },
        { platform: 'tiktok', topic: 'Mr Bigstuff return hints', description: 'Cast social media activity sparks speculation about Series 2', volume: '18M views', tags: ['Comedy', 'Sky Original'] },
        { platform: 'instagram', topic: 'War (Sky) aesthetic', description: 'Moody cinematography stills from War trending as phone wallpapers', volume: '3.8M impressions', tags: ['Sky Original', 'Aesthetic'] },
        { platform: 'x', topic: '#ReacherS3', description: 'Amazon\'s action series continues to dominate conversation', volume: '34K posts', tags: ['Amazon', 'Action'] }
    ],

    // ─── AI Briefing Content ───
    aiBriefing: {
        overview: 'Big week. Peaky Blinders: The Movie has landed on Netflix and Cillian Murphy is everywhere — 124M TikTok views, 2.4M Wikipedia hits. Great news for us: Oppenheimer, 28 Days Later and Dunkirk are all on Sky. Meanwhile, fans are organically buzzing about Day of the Jackal and Sweetpea on TikTok, campaigning for more. Two things happening at once — we can ride the Murphy wave and champion our own originals.',
        insights: [
            { title: 'The Murphy Moment', text: 'Three Murphy trends at once — Peaky Blinders movie, 28 Days Later sequel and Oppenheimer re-watches. The biggest single-talent opportunity we\'ve seen this quarter.' },
            { title: 'Fans Are Doing the Work', text: 'Day of the Jackal and Sweetpea are trending on TikTok without any paid push — fans are campaigning for new series off their own back. Worth amplifying.' },
            { title: 'Oscars Are Coming', text: 'Ceremony on 2 March. A two-week window to spotlight nominated films on Sky Cinema and make the most of the awards conversation.' }
        ]
    },

    // ─── Dashboard Spotlight ───
    spotlight: {
        trigger: {
            title: 'Peaky Blinders: The Movie',
            platform: 'Netflix',
            detail: '#1 Film in the UK — 4 days running, 2.4M Wikipedia views'
        },
        talent: 'Cillian Murphy',
        skyTitles: [
            'Oppenheimer (Sky Cinema)',
            '28 Days Later (Sky Store)',
            'Dunkirk (Sky Cinema)',
            'Retreat (Sky Store)'
        ],
        strategicRecommendation: 'Leverage Cillian Murphy moment — cross-promote Sky Cinema catalogue (Oppenheimer, 28 Days Later, Dunkirk) while Peaky Blinders movie drives peak interest',
        relevance: 'high'
    },

    // ─── Top Movers ───
    topMovers: [
        { title: 'Peaky Blinders: The Movie', platform: 'Netflix Film', change: 'NEW', direction: 'new' },
        { title: 'Black Mirror S7', platform: 'Netflix TV', change: 'NEW', direction: 'new' },
        { title: 'Running Point', platform: 'Netflix TV', change: '+3', direction: 'up' },
        { title: 'Love Is Blind UK S2', platform: 'Netflix TV', change: 'NEW', direction: 'new' },
        { title: 'Prometheus', platform: 'Netflix Film', change: '+5', direction: 'up' },
        { title: 'The Bondsman', platform: 'Amazon', change: 'NEW', direction: 'new' },
        { title: 'Zero Day', platform: 'Netflix TV', change: '-2', direction: 'down' },
        { title: 'The Recruit S2', platform: 'Netflix TV', change: '-3', direction: 'down' }
    ]
};
