// Arrays and variables for content generation

// Array of Top Level Domains (TLDs) to randomly select from
const tlds = ['.rs', '.ru', '.su', '.io', '.yu', '.me'];

// Array of HTTP status codes for simulating broken links
const httpStatuses = [404, 410];

// Variables for head nodding animation
let nodAngle = 0;  // Current angle of the nod
let nodSpeed = 2000;  // Speed of the nodding animation in milliseconds
let nodDepth = 15;  // Maximum depth/angle of the nod

// Randomly select a TLD from the tlds array
let currentTld = tlds[Math.floor(Math.random() * tlds.length)];

// Variable to track the increasing tiredness level
let tirednessLevel = 0;

// Array of main thoughts
const thoughts = [
    { id: 'thought1', text: "11:00pm [Log: Every ending had a beginning] -- An ephemeral internet... it needs governance too... right...? But how do you govern what's here one moment and gone in another? Like trying to catch digital exhaust... mechanistic exhaustion sets in..." },
    { id: 'thought2', text: "11:01pm [Log: Contemplating impermanence] -- The internet is, well... ephemeral. Connections appear and disappear... `410 Gone` like my thoughts right now..." },
    { id: 'thought3', text: "11:03pm [Log: Transitory latent dominations] -- TLDs... they come and go... like ccTLDs... Remember .yu? no? .me neither... .i(o)'m too tired..." },
    { id: 'thought4', text: "11:06pm [Log: Worried about digital rot] -- Broken links... they're like memories we can't access anymore. Speaking of which, where did I put my private keys? my 2fa secrets? my passwords? I think they're in a few different places... or maybe they've gone missing..." },
    { id: 'thought5', text: "11:12pm [Log: Losing focus] -- Web drift... like this website... what was the web supposed to be about again? Oh Right! About being tired on the internet I think... or maybe being tired of making decisions... a web of performative bureaucracy, oh wait, I meant democracy..." },
    { id: 'thought6', text: "11:15pm [Log: Slippery associations] -- Is internet governance like herding cats, or wait.. bats? Mmmm... cats, bats... bits... like bits in an hourglass... the epehemeral internet are the days of our lives... soap opera dreams..." },
    { id: 'thought7', text: "11:16pm [Log: Pondering digital mortality] -- What if this website just... vanished? Like so many before it... What if I just vanished... wayback machined into a digital compost heap..." },
    { id: 'thought8', text: "11:20pm [Log: Forgotten spatial domains] -- DNS... it's like the phone book of the internet. Do people even use phone books anymore? Longdistance BBS? I think I'll try DNS-BBSing my grandma in the morning... is the ether considered a long distance call? Does the ether have a server...?" },
    { id: 'thought9', text: "11:23pm [Log: Can I continue?] -- ICANN... sounds like 'I can', but sometimes I feel like 'I can't', or maybe 'it can't', at least at this hour... can 'UCANs'...?" },
    { id: 'thought10', text: "11:31pm [Log: Drifting into the root of it all] -- Root servers... Root files ... the internet's family tree... or is it more like a forest? A digital ecosystem... an Ostrom commons... a rewilded driftwood git... it's time to get some zZzs..." }
];

// Array of meta thoughts
const metaThoughts = [
    { id: "meta1", text: "Cables... undersea cables... connecting continents... but who governs the ocean floor? I think I tried once... but ran out of breath maybe...? Either way... I'm drowning just thinking about this..." },
    { id: "meta2", text: "Data centers... humming with servers... but where? Whose jurisdiction? Governance of physical locations... or virtual.. or.. my brain is overheating like those servers..." },
    { id: "meta3", text: "Internet exchange points... connecting networks... but who decides where they go? Years of pondering... still no clear answer... exhausted..." },
    { id: "meta4", text: "Satellites... orbiting Earth... interstellar connectivity... but space law? Space governance? It's all going over my head..." },
    { id: "meta5", text: "Fiber optics... light speed communication... but who lays rules that lay the fiber? Who decides the routes? A tangled know of governance of infrastructure of policies of... zZz....." },
    { id: "meta6", text: "Towering infrastructure sprouting everywhere... local vs. national vs. global policies... It's a recursive socio-physical-technical nightmare... 5, 4, 3, 2, 1G ... gyrating in circles for years... `rm -rf` already" },
    { id: "meta7", text: "Governance of governance of meta meta-governance? How deep (or high?) does this go? Brains can't compute anymore... or wait, they never could..." },
    { id: "meta8", text: "Internet infrastructure affects the nation-state's policies... the nation-state policies shape physical routing... the internet reroutes, renegotiates, reconstitutes... and so on and so on in an endless loop... I'm spiraling... collapsing." },
    { id: "meta9", text: "Decisions... I just need to make decisions... but every choice affects the whole system... the system of systems... of systems... where do I interveen...? I'm paralized, such sweetness for sleeping..." },
    { id: "meta10", text: "Years of thinking... and still no coherent answer... or is there? Can anyone tell anymore...? Physical, virtual, meta, governance of governance of infrastructure of policies of... zZz....." }
];

// Array of sleepy governance layers
const sleepyGovernanceLayer = [
    { level: "Physical", description: "Undersea cables... data centers... so heavy... can't move..." },
    { level: "Network", description: "Packets drifting... routing tables... need coffee..." },
    { level: "Standards", description: "RFC... IETF... W3C... alphabet soup... zZz..." },
    { level: "Policy", description: "Laws... regulations... too many words... brain fuzzy..." },
    { level: "User", description: "Interfaces... accessibility... user rights... who's the user again?" },
    { level: "Meta", description: "Governance of governance... it's turtles all the way down... or up?" }
];

// Function to type out content with a tired effect
function typeContent(element, content, index = 0) {
    // If we haven't reached the end of the content
    if (index < content.length) {
        // Add the next character to the element's text
        element.textContent += content[index];
        // Schedule the next character with a random delay
        // The delay increases as tirednessLevel increases, simulating slower typing
        setTimeout(() => typeContent(element, content, index + 1), Math.random() * (100 + tirednessLevel * 50) + 50);
    }
    // Increase tiredness level, but cap it at 1
    tirednessLevel = Math.min(tirednessLevel + 0.05, 1);
}

// Function to create and type a new element
function createAndTypeElement(tag, content, parent) {
    const element = document.createElement(tag);
    element.className = `typed-${tag}`; // Add a class based on the tag
    parent.appendChild(element);
    typeContent(element, content);
}

// Function to update links with random content and TLDs
function updateLinks() {
    // Select all links in the url-container
    document.querySelectorAll('#url-container a').forEach((link) => {
        // Split the current link text into words
        const words = link.textContent.split('/');
        // Create new words by randomly truncating each original word
        const newWords = words.map(word => word.substring(0, Math.floor(Math.random() * word.length)));
        // Join the new words back into a string
        const newText = newWords.join('/');
        // Set the link text to the new text plus a random TLD
        link.textContent = newText + currentTld;

        // Set the link's href to a URL with the new text, TLD, and status code
        link.href = `https://${newText}<strong>${currentTld}</strong>`;
    });
}

// Function to create a nodding head effect
function nodHead(element, initialMaxAngle, duration) {
    // Initialize variables for timing and angle calculations
    let startTime = null;
    let nodDuration = duration;
    let restDuration = duration + 50;
    let nodCount = 0;
    let maxAngle = initialMaxAngle;
    let overshootAngle = 2; // Degrees to overshoot forward

    // Define easing function for smooth animation
    function easeInOutQuad(t) {
        // This function creates a smooth, non-linear transition effect
        // It's used to make the nodding animation feel more natural

        // The function takes a single parameter 't', which represents the progress of the animation (0 to 1)

        // For the first half of the animation (t < 0.5):
        //   It uses the formula 2 * t * t, which creates a gradual acceleration

        // For the second half of the animation (t >= 0.5):
        //   It uses the formula -1 + (4 - 2 * t) * t, which creates a gradual deceleration

        // This combination results in a smooth start, faster middle, and smooth end to the animation

        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    // Main animation function
    function animate(currentTime) {
        // Set start time on first call
        if (!startTime) startTime = currentTime;
        let elapsedTime = currentTime - startTime;
        let progress = elapsedTime / nodDuration;

        if (progress < 1) {
            // Calculate and apply nodding angle during active phase
            let easedProgress = easeInOutQuad(progress);
            let angle = maxAngle * Math.sin(easedProgress * Math.PI);

            // Update element's transform with new rotation
            element.style.transform = element.style.transform.replace(/rotateX\([^)]*\)/, '') + ` rotateX(${angle}deg)`;

            // Continue animation
            requestAnimationFrame(animate);
        } else if (elapsedTime < nodDuration + restDuration) {
            // Apply more pronounced forward overshoot at end of nod
            const pronouncedOvershootAngle = overshootAngle * 1.5; // Increase overshoot by 50%
            element.style.transform = element.style.transform.replace(/rotateX\([^)]*\)/, '') + ` rotateX(${pronouncedOvershootAngle}deg)`;

            // Continue animation
            requestAnimationFrame(animate);
        } else {
            // Reset rotation after nod is complete
            element.style.transform = element.style.transform.replace(/rotateX\([^)]*\)/, '');

            // Increase nod count and adjust max angle for next nod
            nodCount++;
            maxAngle = Math.min(20 + nodCount * 5, 55);

            // Schedule next nod after a delay
            setTimeout(() => {
                startTime = null;
                requestAnimationFrame(animate);
            }, 2000);
        }
    }

    // Start the animation loop
    requestAnimationFrame(animate);
}

// Flag to track if the first meta thought has been shown
let firstMetaThoughtShown = false;

// Function to show thoughts, with a delay for the first meta thought
function showThought() {
    // Check if this is the first meta thought
    if (!firstMetaThoughtShown) {
        // Set a timeout to delay the first meta thought
        setTimeout(() => {
            // Display the meta thought after the delay
            displayMetaThought();
            // Set the flag to true after showing the first meta thought
            firstMetaThoughtShown = true;
        }, 19500); // Delay of 19.5 seconds for the first meta thought
    } else {
        // If not the first meta thought, display after 10 seconds
        setTimeout(() => displayMetaThought(), 10000);
    }
}

// Index to keep track of which meta thought to display next
let metaThoughtIndex = 0;

// Function to handle the display of meta thoughts
function displayMetaThought() {
    const existingBubbles = document.querySelectorAll('.thought-bubble');
    existingBubbles.forEach(bubble => bubble.remove());

    const thoughtBubbleDiv = document.createElement('div');
    thoughtBubbleDiv.className = 'thought-bubble meta-thought';

    const currentMetaThought = metaThoughts[metaThoughtIndex];
    thoughtBubbleDiv.id = currentMetaThought.id;
    thoughtBubbleDiv.textContent = currentMetaThought.text;
    metaThoughtIndex = (metaThoughtIndex + 1) % metaThoughts.length;

    const rect = document.body.getBoundingClientRect();
    thoughtBubbleDiv.style.left = `${Math.random() * (rect.width - 200)}px`;
    thoughtBubbleDiv.style.top = `${Math.random() * (rect.height - 100)}px`;

    document.body.appendChild(thoughtBubbleDiv);

    setTimeout(() => { thoughtBubbleDiv.style.opacity = 1; }, 100);

    setTimeout(() => {
        thoughtBubbleDiv.style.opacity = 0;
        setTimeout(() => thoughtBubbleDiv.remove(), 2000);
    }, 10000);
}

// Updated addNewUrl and typeUrl functions
function typeUrl(newLink, url, words, urlLength, index = 0) {
    if (index < urlLength) {
        // Add a random word from the array to the URL
        url += words[Math.floor(Math.random() * words.length)] + '/';

        // Update the link text with the current URL and TLD
        newLink.textContent = url + currentTld;

        // Schedule the next word to be added, with a delay that increases with tiredness
        setTimeout(() => typeUrl(newLink, url, words, urlLength, index + 1), Math.random() * (200 + tirednessLevel * 100) + 100);
    }
}

function addNewUrl() {
    const urlContainer = document.getElementById('url-container');
    if (!urlContainer) return; // Exit if the container doesn't exist

    const newLink = document.createElement('a');
    newLink.href = '#';
    urlContainer.appendChild(newLink);

    const words = ['tired', 'ephemeral', 'networks', 'governance', 'disappearing', 'content', 'memory', 'zZz', 'domains', 'internet', 'fading', 'links'];
    const urlLength = Math.floor(Math.random() * 10) + 5;
    let url = 'https://www.';

    typeUrl(newLink, url, words, urlLength);
}

// Function to animate individual sleepy layer
function animateSleepyGovernanceLayers(layerDiv) {
    setInterval(() => {
        const x = (Math.random() * 200 - 100); // Random movement within a 200px range
        const y = (Math.random() * 200 - 100);
        const rotate = Math.random() * 8 - 4; // Slight rotation

        // Apply the random translation and rotation
        layerDiv.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    }, 5000 + Math.random() * 5000);
}

// Function to add the sleepy governance layer to the page
function addSleepyGovernanceLayer() {
    const governanceDiv = document.createElement('div');
    governanceDiv.id = 'sleepy-governance';
    governanceDiv.className = 'sleepy-governance-container';
    document.body.appendChild(governanceDiv);

    createAndTypeElement('h2', 'Fever Dream:\nA Sleepy Governance Layer For An Ephemeral Internet', governanceDiv);

    // Animate the container independently
    animateSleepyGovernanceLayerContainer(governanceDiv);

    const positions = [
        { top: '10%', left: '10%' }, { top: '10%', left: '40%' }, { top: '10%', left: '70%' },
        { top: '60%', left: '10%' }, { top: '60%', left: '40%' }, { top: '60%', left: '70%' }
    ];

    sleepyGovernanceLayer.forEach((layer, index) => {
        setTimeout(() => {
            const layerDiv = document.createElement('div');
            layerDiv.className = 'governance-layer';
            governanceDiv.appendChild(layerDiv);

            // Set position
            layerDiv.style.top = positions[index].top;
            layerDiv.style.left = positions[index].left;

            createAndTypeElement('h3', layer.level, layerDiv);
            createAndTypeElement('p', layer.description, layerDiv);

            layerDiv.style.opacity = 0;

            setTimeout(() => {
                layerDiv.style.opacity = 1;
            }, 100);

            // Animate each layer independently
            animateSleepyGovernanceLayers(layerDiv);

            setTimeout(() => addSleepyInteroperability(layerDiv, layer.level), (index + 1) * 6000);

            // Apply nodding effect with different parameters for each layer
            nodHead(layerDiv, 5 + Math.random() * 15, 2000 + Math.random() * 2000);
        }, index * 20000);
    });
}

// Function to animate the sleepy governance layer container
function animateSleepyGovernanceLayerContainer(containerDiv) {
    let opacity = 0.1;
    let darkness = 0;

    // Initial expansion
    setTimeout(() => {
        containerDiv.style.width = '99vw';
        containerDiv.style.height = '99vh';
    }, 1000);

    // Gradual darkening
    const darkenInterval = setInterval(() => {
        darkness += 0.01;
        opacity += 0.005;
        if (darkness > 0.3) {
            clearInterval(darkenInterval);
        }
        containerDiv.style.backgroundColor = `rgba(200, 200, 255, ${opacity})`;
    }, 10000); // Darken every 10 seconds

    // Continuous subtle movement
    setInterval(() => {
        const x = Math.random() * 30 - 15;
        const y = Math.random() * 30 - 15;
        const rotate = Math.random() * 2 - 1;

        containerDiv.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotate}deg)`;
    }, 7000 + Math.random() * 5000);

    // Fade out with the rest of the page
    setTimeout(() => {
        containerDiv.style.transition = 'opacity 60s';
        containerDiv.style.opacity = '0';
    }, 150000); // Start fading out 30 seconds earlier
}

// Function to add sleepy interoperability effects between governance layers
function addSleepyInteroperability(layerDiv, layerLevel) {
    if (!layerDiv || isShowingFinal410Effect) return; // Exit if 410 effect has started

    // Select a random meta thought at the beginning of the function
    const randomMetaThought = metaThoughts[Math.floor(Math.random() * metaThoughts.length)];

    const interopEffect = document.createElement('div');
    interopEffect.className = 'interop-effect';
    interopEffect.innerHTML = `<strong>${layerLevel} Layer trying to connect... zZz</strong>`;

    interopEffect.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
    interopEffect.style.top = `${Math.random() * (window.innerHeight - 100)}px`;

    document.body.appendChild(interopEffect);

    setTimeout(() => {
        interopEffect.style.opacity = 1;

        // Randomly decide if this interop effect will "stick" without connecting
        const stickWithoutConnecting = Math.random() < 0.2; // 20% chance

        if (stickWithoutConnecting) {
            // Do nothing more, leaving the "trying to connect" message visible
        } else if (Math.random() < 0.3) {
            layerDiv.style.backgroundColor = 'rgba(255, 200, 200, 0.2)';
            interopEffect.innerHTML += '<strong><em> ... failed</em></strong>';
            setTimeout(() => {
                interopEffect.style.opacity = 0;
                setTimeout(() => interopEffect.remove(), 1000);
            }, 3000);
        } else {
            const words = randomMetaThought.text.split(' ');
            const randomIndex = Math.floor(Math.random() * words.length);
            const randomWord = words[randomIndex];

            // Create a line element
            const lineDiv = document.createElement('div');
            lineDiv.className = 'interop-line';
            lineDiv.style.position = 'absolute';
            lineDiv.style.backgroundColor = 'rgba(255, 255, 200, 1)';
            lineDiv.style.height = '2px';
            lineDiv.style.transformOrigin = 'left center';
            document.body.appendChild(lineDiv);

            // Position and animate the line
            const start = interopEffect.getBoundingClientRect();
            const end = layerDiv.getBoundingClientRect();
            const distance = Math.sqrt(Math.pow(end.left - start.left, 2) + Math.pow(end.top - start.top, 2));
            const angle = Math.atan2(end.top - start.top, end.left - start.left) * 180 / Math.PI;

            lineDiv.style.width = `${distance}px`;
            lineDiv.style.left = `${start.left}px`;
            lineDiv.style.top = `${start.top}px`;
            lineDiv.style.transform = `rotate(${angle}deg)`;

            // Animate the word traveling
            const travelingWordDiv = document.createElement('div');
            travelingWordDiv.className = 'traveling-word';
            travelingWordDiv.textContent = randomWord;
            travelingWordDiv.style.position = 'absolute';
            travelingWordDiv.style.left = `${start.left}px`;
            travelingWordDiv.style.top = `${start.top}px`;
            document.body.appendChild(travelingWordDiv);

            // Animate the traveling word
            const duration = 2000; // 2 seconds
            const startTime = performance.now();
            function animateWord(time) {
                const progress = (time - startTime) / duration;
                if (progress < 1) {
                    travelingWordDiv.style.left = `${start.left + (end.left - start.left) * progress}px`;
                    travelingWordDiv.style.top = `${start.top + (end.top - start.top) * progress}px`;
                    requestAnimationFrame(animateWord);
                } else {
                    travelingWordDiv.remove();
                    lineDiv.remove();
                    // Replace a random word in the layerDiv
                    const layerWords = layerDiv.querySelector('p').textContent.split(' ');
                    const replaceIndex = Math.floor(Math.random() * layerWords.length);
                    layerWords[replaceIndex] = randomWord;
                    layerDiv.querySelector('p').textContent = layerWords.join(' ');
                }
            }
            requestAnimationFrame(animateWord);

            // Update the success message
            interopEffect.innerHTML = `<strong>${layerLevel} Layer trying to connect... zZz<em> ... connected</em></strong><br><br>${randomMetaThought.text}`;
            layerDiv.querySelector('p').textContent += ` ... ${randomWord}?`;

            setTimeout(() => {
                interopEffect.style.opacity = 0;
                setTimeout(() => interopEffect.remove(), 1000);
            }, 3000);
        }
    }, 1000);

    if (Math.random() < 0.5) {
        setTimeout(() => addSleepyInteroperability(layerDiv, layerLevel), Math.random() * 10000 + 5000);
    }
}

// Initialize the page content
thoughts.forEach((thought, index) => {
    setTimeout(() => {
        const anchor = document.getElementById(thought.id);
        anchor.style.opacity = 1;
        createAndTypeElement('p', thought.text, anchor);
    }, index * 20000);
});

// Add the main title after a delay
setTimeout(() => {
    const contentContainer = document.getElementById('content-container');
    createAndTypeElement('h1', 'Tired Thoughts on Internet Ephemerality', contentContainer);
}, 30000);

// Start the nodding animation after a delay
setTimeout(() => nodHead(document.getElementById('content-container'), 5, 2000), 30000);

// Add the sleepy governance layer after a delay
setTimeout(addSleepyGovernanceLayer, 55000);

// Set up intervals for various functions
let urlDriftInterval;
setInterval(addNewUrl, 48000);
setTimeout(() => {
    urlDriftInterval = setInterval(() => {
        const urlContainer = document.getElementById('url-container');
        if (urlContainer) {
            const x = Math.sin(Date.now() / 4000) * 30; // Increased x range from 15 to 30
            const y = Math.cos(Date.now() / 5500) * 20; // Increased y range from 8 to 20
            urlContainer.style.transition = 'transform 2.5s ease-in-out';
            urlContainer.style.transform = `translate(${x}px, ${y}px)`;
        }
    }, 2500); // Update frequency remains the same
}, 96000); // Start drifting after the second interval of addNewUrl

setInterval(updateLinks, 19000);

// Change TLD every 5 seconds
setInterval(() => {
    currentTld = tlds[Math.floor(Math.random() * tlds.length)];
}, 5000);

// Replace the showFinal410Effect function with this updated version
function showFinal410Effect() {
    // Reset the opacity of the whole page
    document.body.style.opacity = '1';

    // Remove the content-container
    const contentContainer = document.getElementById('content-container');
    if (contentContainer) {
        contentContainer.remove();
    }

    const goneElementDiv = document.createElement('div');
    goneElementDiv.textContent = '410 Gone';
    goneElementDiv.className = 'gone-410';
    goneElementDiv.style.padding = '5px';

    function replaceWithGone(element) {
        if (element.nodeType === Node.ELEMENT_NODE &&
            !element.classList.contains('gone-410') &&
            !element.classList.contains('sleepy-governance-container')) {

            const cloneGoneElementDiv = goneElementDiv.cloneNode(true);
            cloneGoneElementDiv.className = `gone-410 ${element.className}`;

            // Copy styles and position
            const styles = window.getComputedStyle(element);
            Object.assign(cloneGoneElementDiv.style, {
                position: styles.position,
                left: styles.left,
                top: styles.top,
                width: styles.width,
                height: styles.height,
                transform: styles.transform,
                transition: styles.transition,
                animation: styles.animation,
                zIndex: styles.zIndex,
                opacity: '1', // Reset opacity to 1 (fully opaque)
                padding: '5px' // Add padding
            });

            // Replace the original element with the new gone-410 element
            element.parentNode.replaceChild(cloneGoneElementDiv, element);
        } else if (element.childNodes.length > 0) {
            Array.from(element.childNodes).forEach(replaceWithGone);
        }
    }

    // Remove the headers
    const mainHeader = document.querySelector('h1');
    const feverDreamHeader = document.querySelector('h2');
    if (mainHeader) mainHeader.remove();
    if (feverDreamHeader) feverDreamHeader.remove();

    // Start the replacement process from the sleepy governance container
    const sleepyGovernanceContainer = document.querySelector('.sleepy-governance-container');
    if (sleepyGovernanceContainer) {
        Array.from(sleepyGovernanceContainer.children).forEach(replaceWithGone);
    }

    // Replace "trying to connect ... Zzz" elements
    document.querySelectorAll('.interop-effect').forEach(el => {
        if (el.textContent.includes('trying to connect... zZz')) {
            const clone = goneElementDiv.cloneNode(true);
            el.parentNode.replaceChild(clone, el);
        }
    });

    // Clear the URL drifting interval
    clearInterval(urlDriftInterval);

    // Add flickering and drifting effect to all 410 divs
    const flickerAndDriftInterval = setInterval(() => {
        document.querySelectorAll('.gone-410').forEach(el => {
            // Flickering
            el.style.opacity = (Math.random() * 0.5 + 0.5).toString();

            // Drifting
            const currentTransform = el.style.transform || '';
            const translateX = (Math.random() - 0.5) * 5; // -2.5 to 2.5 pixels
            const translateY = (Math.random() - 0.5) * 5; // -2.5 to 2.5 pixels
            el.style.transform = `${currentTransform} translate(${translateX}px, ${translateY}px)`;
        });
    }, 100);

    // Gradually fade out and drift all 410 divs out of frame
    setTimeout(() => {
        const allGoneDivs = document.querySelectorAll('.gone-410');
        allGoneDivs.forEach((div) => {
            div.style.transition = 'opacity 30s linear, transform 30s linear';
            div.style.opacity = '0';
            const randomAngle = Math.random() * Math.PI * 2;
            const distance = Math.max(window.innerWidth, window.innerHeight) * 1.5;
            const targetX = Math.cos(randomAngle) * distance;
            const targetY = Math.sin(randomAngle) * distance;
            div.style.transform += ` translate(${targetX}px, ${targetY}px)`;
        });
        setTimeout(() => clearInterval(flickerAndDriftInterval), 30000);
    }, 10000);
}

// Modify the ending sequence
let isShowingFinal410Effect = false;

setTimeout(() => {
    clearInterval(metaThoughtInterval);
    clearInterval(interopInterval);
    isShowingFinal410Effect = true;
    showFinal410Effect();
}, 180000);

// Store intervals for metaThoughts and interop elements so we can clear them later
const metaThoughtInterval = setInterval(showThought, 20000);
const interopInterval = setInterval(() => {
    if (Math.random() < 0.5) {
        const layers = document.querySelectorAll('.governance-layer');
        if (layers.length > 0) {
            const randomLayer = layers[Math.floor(Math.random() * layers.length)];
            addSleepyInteroperability(randomLayer, randomLayer.querySelector('h3').textContent);
        }
    }
}, 10000);