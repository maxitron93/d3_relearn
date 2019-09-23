const section2HTML = `
<h1>Section 2</h1>
<svg id="ctr1">
    <!-- Order of appearance matters. Can't use z-index to manage layers -->
    <rect id="rect1"></rect>
    <circle id="circle1"></circle>
    <ellipse id="ellipse1"></ellipse>
    <line 
        id="line1"
        x1="0"
        y1="0"
        x2="200"
        y2="200"
    ></line>

    <!-- Polygon and polyline -->
    <polygon 
        id="polygon1"
        points="2.5,2.5 100,10 20,200"
    ></polygon>
    <polyline
        id="polyline1"
        points="2.5,2.5 100,10 20,200"
    ></polyline>

    <!-- SVG Path -->
    <path 
    id="path1"
    d= "
        M100,100 
        L200,200
        M400,250,
        L100,30
        L200,50
        Z
        M300,59
        Q 200, 300 100, 200
    ";
    ></path>

    <!-- SVG Text -->
    <a xlink:href="https://google.com" target="_blank">
        <text 
        id="text1"
        x="40"
        y="40"
        >
            Hello World
            <tspan
            x="200"
            y="200"
            >Second Line</tspan>
        </text>
    </a>

    <!-- Definitions, Groups and Markers -->
    <defs> <!-- Create the definition. These don't render until used -->
        <rect id="rect2"></rect>
        <g id="group1">
            <circle id="circle2"></circle>
            <circle id="circle3"></circle>
            <circle id="circle4"></circle>
        </g>
    </defs>
    <use xlink:href="#rect2"></use> <!-- Use the defined svg -->
    <use xlink:href="#rect2" x="100" y="100"></use> <!-- Use the defined svg -->
    <use xlink:href="#group1"></use> <!-- Use the defined group -->

    <!-- Text Paths -->
    <defs>
        <path 
        id="customTextPath"
        d="M0,0 L300,300"
        >
        </path>
    </defs>

    <text 
    id="text2" 
    x="100" 
    y="100" 
    >
        <textpath xlink:href="#customTextPath"> 
            Hellow World!
        </textpath>
        
    </text>

    <!-- Clips Paths -->
    <defs>
        <clipPath id="customClipPath">
            <rect id="rect3"></rect>
        </clipPath>
    </defs>

    <circle id="circle5" clip-path="url(#customClipPath)"></circle>
    <!-- Clip path mean only SVG within the clip path will be shown -->
    <rect id="rect4"></rect> <!-- Just to show the clip path -->

</svg>
`

export {
    section2HTML
}
