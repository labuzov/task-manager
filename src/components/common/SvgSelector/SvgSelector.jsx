// import './SvgSelector.scss';


const SvgSelector = ({ id }) => {

    switch (id) {
        case 'menu': {
            return (
                <svg height="24" viewBox="0 -53 384 384" width="24"
                    xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" /><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" /><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" /></svg>
            )
        }

        case 'settings': {
            return (
                <svg height="24" viewBox="0 0 24 24" width="24"
                    xmlns="http://www.w3.org/2000/svg"><g><path d="m13.12 24h-2.24c-.757 0-1.396-.567-1.486-1.32l-.239-1.876c-.477-.155-.937-.346-1.374-.569l-1.494 1.161c-.606.469-1.459.415-1.985-.126l-1.575-1.575c-.537-.521-.591-1.374-.122-1.979l1.161-1.495c-.224-.437-.415-.897-.569-1.374l-1.88-.239c-.75-.092-1.317-.731-1.317-1.488v-2.24c0-.757.567-1.396 1.32-1.486l1.876-.239c.155-.477.346-.937.569-1.374l-1.16-1.494c-.47-.606-.415-1.46.127-1.986l1.575-1.575c.521-.537 1.375-.59 1.979-.122l1.494 1.162c.437-.223.897-.414 1.375-.569l.239-1.88c.09-.75.729-1.317 1.486-1.317h2.24c.757 0 1.396.567 1.486 1.32l.239 1.876c.478.155.938.346 1.375.569l1.494-1.161c.607-.469 1.459-.415 1.985.127l1.575 1.575c.537.521.591 1.374.122 1.979l-1.161 1.495c.224.437.415.897.569 1.374l1.88.239c.749.091 1.316.73 1.316 1.487v2.24c0 .757-.567 1.396-1.32 1.486l-1.876.239c-.155.477-.346.937-.569 1.374l1.161 1.494c.47.606.415 1.459-.127 1.985l-1.575 1.575c-.521.537-1.375.592-1.979.122l-1.495-1.161c-.437.224-.897.415-1.374.569l-.239 1.88c-.091.75-.73 1.317-1.487 1.317zm-5.39-4.86c.083 0 .168.021.244.063.551.308 1.148.556 1.774.736.192.055.333.219.358.417l.28 2.2c.03.251.247.444.494.444h2.24c.247 0 .464-.193.493-.439l.281-2.204c.025-.198.166-.362.358-.417.626-.18 1.223-.428 1.774-.736.175-.098.393-.081.55.042l1.75 1.36c.201.156.483.143.655-.034l1.585-1.585c.181-.176.195-.458.039-.66l-1.36-1.75c-.123-.158-.14-.375-.042-.55.308-.551.556-1.148.736-1.774.055-.192.219-.333.417-.358l2.2-.28c.251-.031.444-.248.444-.495v-2.24c0-.247-.193-.464-.439-.493l-2.204-.281c-.198-.025-.362-.166-.417-.358-.18-.626-.428-1.223-.736-1.774-.098-.175-.082-.392.042-.55l1.36-1.75c.157-.202.143-.484-.033-.654l-1.585-1.585c-.175-.182-.458-.196-.66-.039l-1.75 1.36c-.159.123-.376.14-.551.042-.549-.308-1.146-.555-1.774-.736-.192-.055-.333-.219-.358-.417l-.28-2.2c-.031-.252-.248-.445-.495-.445h-2.24c-.247 0-.464.193-.493.439l-.281 2.204c-.025.198-.166.362-.358.418-.628.18-1.225.428-1.774.735-.175.099-.392.081-.551-.041l-1.75-1.36c-.202-.157-.483-.143-.654.033l-1.585 1.586c-.181.176-.195.458-.039.66l1.36 1.75c.123.158.14.375.042.55-.309.551-.556 1.148-.736 1.774-.055.192-.219.333-.417.358l-2.2.28c-.251.03-.444.247-.444.494v2.24c0 .247.193.464.439.493l2.204.281c.198.025.362.166.417.358.18.626.428 1.223.736 1.774.098.175.082.392-.042.55l-1.36 1.75c-.157.202-.143.484.033.654l1.585 1.585c.175.181.456.195.66.039l1.75-1.36c.091-.068.199-.104.308-.104z" /></g><g><path d="m12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z" /></g></svg>
            )
        }

        case 'logout': {
            return (
                <svg height="24" xmlns="http://www.w3.org/2000/svg" width="24"
                    viewBox="0 0 512 512" >
                    <g>
                        <g>
                            <path d="M255.15,468.625H63.787c-11.737,0-21.262-9.526-21.262-21.262V64.638c0-11.737,9.526-21.262,21.262-21.262H255.15
			c11.758,0,21.262-9.504,21.262-21.262S266.908,0.85,255.15,0.85H63.787C28.619,0.85,0,29.47,0,64.638v382.724
			c0,35.168,28.619,63.787,63.787,63.787H255.15c11.758,0,21.262-9.504,21.262-21.262
			C276.412,478.129,266.908,468.625,255.15,468.625z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M505.664,240.861L376.388,113.286c-8.335-8.25-21.815-8.143-30.065,0.213s-8.165,21.815,0.213,30.065l92.385,91.173
			H191.362c-11.758,0-21.262,9.504-21.262,21.262c0,11.758,9.504,21.263,21.262,21.263h247.559l-92.385,91.173
			c-8.377,8.25-8.441,21.709-0.213,30.065c4.167,4.21,9.653,6.336,15.139,6.336c5.401,0,10.801-2.041,14.926-6.124l129.276-127.575
			c4.04-3.997,6.336-9.441,6.336-15.139C512,250.302,509.725,244.88,505.664,240.861z"/>
                        </g>
                    </g>
                </svg>

            )
        }

        case 'theme': {
            return (
                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 302.4 302.4" >
                    <g>
                        <g>
                            <path d="M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6
			c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z M190.4,190.4
			c-10,10-24,16-39.2,16s-29.2-6-39.2-16s-16-24-16-39.2s6-29.2,16-39.2s24-16,39.2-16s29.2,6,39.2,16s16,24,16,39.2
			S200.4,180.4,190.4,190.4z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4
			C302.4,145.6,297.6,140.8,292,140.8z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8
			C161.6,255.6,156.8,250.8,151.2,250.8z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M258,243.6l-22-22c-3.6-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S262,247.6,258,243.6z" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M151.2,0c-5.6,0-10.4,4.8-10.4,10.4v30.8c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4V10.4
			C161.6,4.8,156.8,0,151.2,0z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M258.4,44.4c-4-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4c3.6,4,10.4,4,14.4,0l22-22C262.4,54.8,262.4,48.4,258.4,44.4z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M41.2,140.8H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.4,10.4,10.4,10.4h30.8c5.6,0,10.4-4.8,10.4-10.4
			C51.6,145.6,46.8,140.8,41.2,140.8z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M80.4,221.6c-3.6-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22C84.4,232,84.4,225.6,80.4,221.6z" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M80.4,66.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S84.4,70.4,80.4,66.4z" />
                        </g>
                    </g>
                </svg>

            )
        }

        case 'home': {
            return (
                <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0" /></svg>
            )
        }

        case 'study': {
            return (
                <svg height="24" viewBox="0 0 511.441 511.441" width="24" xmlns="http://www.w3.org/2000/svg"><g><path d="m255.721 347.484-165.501-80.733v106.57l165.51 73.503 165.509-73.503v-106.579z" /><path d="m511.441 189.361-255.72-124.744-255.721 124.744 255.721 124.744 195.522-95.378v111.032h30v-125.667z" /></g></svg>
            )
        }

        case 'work': {
            return (
                <svg height="24" width="24" viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m211 240h90v30h-90zm0 0" /><path d="m415.378906 270h-84.378906v15c0 8.289062-6.710938 15-15 15h-120c-8.289062 0-15-6.710938-15-15v-15h-84.378906c-19.394532 0-36.546875-12.363281-42.6875-30.761719l-53.933594-161.828125v327.589844c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-327.578125l-53.9375 161.816406c-6.136719 18.398438-23.289062 30.761719-42.683594 30.761719zm0 0" /><path d="m316 0h-120c-24.8125 0-45 20.1875-45 45v15h-125.191406l56.574218 169.746094c2.050782 6.136718 7.777344 10.253906 14.238282 10.253906h84.378906v-15c0-8.289062 6.710938-15 15-15h120c8.289062 0 15 6.710938 15 15v15h84.378906c6.460938 0 12.1875-4.117188 14.238282-10.253906l56.578124-169.746094h-125.195312v-15c0-24.8125-20.1875-45-45-45zm-135 60v-15c0-8.277344 6.722656-15 15-15h120c8.277344 0 15 6.722656 15 15v15zm0 0" /></svg>
            )
        }

        case 'folder': {
            return (
                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 408" >
                    <g>
                        <g>
                            <path d="M372,88.661H206.32l-33-39.24c-0.985-1.184-2.461-1.848-4-1.8H36c-19.956,0.198-36.023,16.443-36,36.4v240
			c-0.001,19.941,16.06,36.163,36,36.36h336c19.94-0.197,36.001-16.419,36-36.36v-199C408.001,105.08,391.94,88.859,372,88.661z"/>
                        </g>
                    </g>
                </svg>

            )
        }

        case 'add': {
            return (
                <svg height="24" viewBox="0 0 448 448" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" /></svg>
            )
        }

        case 'dots': {
            return (
                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 426.667 426.667" >
                    <g>
                        <g>
                            <circle cx="42.667" cy="213.333" r="42.667" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="213.333" cy="213.333" r="42.667" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="384" cy="213.333" r="42.667" />
                        </g>
                    </g>
                </svg>

            )
        }

        default: return <div>NO SVG</div>;
    }

}

export default SvgSelector;