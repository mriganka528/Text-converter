import React from 'react'

export default function About(props) {

    return (
        <div className="container my-3" style={{ backgroundColor: props.mode === 'primary' ? 'whitesmoke' : '#020912', color: props.mode === 'primary' ? 'rgb(30,30,30)' : '#cacbcc', paddingInline: "1.5rem" }}>
            <h2 style={{ backgroundColor: props.mode === 'primary' ? 'whitesmoke' : '#020912', color: props.mode === 'primary' ? 'rgb(30,30,30)' : '#F9F9F9' }}>About</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'primary' ? 'whitesmoke' : '#020912', color: props.mode === 'primary' ? 'rgb(30,30,30)' : '#F9F9F9' }}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" style={{ backgroundColor: props.mode === 'primary' ? 'whitesmoke' : '#010a14', color: props.mode === 'primary' ? 'rgb(30,30,30)' : '#F9F9F9' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About the developer and website
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <span style={{ fontSize: "1.1rem", fontFamily:"Cinzel" }}>Hello everyone, myself Mriganka Sarma.</span> Introducing you to TextMaster, the ultimate text editor designed to streamline your writing experience. Transform your input with ease - capitalize for emphasis, convert to lowercase or uppercase for stylistic preferences. Copy and clear text effortlessly. Gain insights with word and character count features. Preview your text in real-time and estimate reading time for optimal communication. TextCraft Pro is your all-in-one tool for precision editing and enhanced writing productivity.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
