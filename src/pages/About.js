import React from 'react'

function About() {
  return (
    <div>
        <div className="blog">
            {/* <!-- baris ke dua --> */}
            <div className="baris">
                <img src="/img/learn.png" />
            </div>


            <div className="baris">
                <h1><b>Hai,Ini WebsiteYang Dibuat Oleh Rizqi Dan Dewi.</b></h1><br />
                <h6> On this blog I share tips and tricks, frameworks, projects, tutorials, etc
                    Make sure you subscribe
                    to
                    get the latest updates</h6>
                <form action="subscribe">
                    <input className="bg-light" type="text" placeholder="enter your Email...." />
                    <button type="submit" className="btn btn-danger">subscribe</button>
                </form>
            </div>


            <br />
        </div>
    </div>
  )
}

export default About