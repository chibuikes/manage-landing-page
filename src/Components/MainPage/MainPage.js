import React,{useState} from "react";
import classes from './MainPage.module.css'
import Wrapper from "../Wrapper/Wrapper";
import logo from './logo.svg'
import intro from './illustration-intro.svg'
import ham from './icon-hamburger.svg'
import close from './icon-close.svg'
const MainPage=()=>{
    const [hide, setHide]=useState(true)
    const Hide=()=>{
        setHide((val)=>{return !val})
    }
    return <Wrapper>
        
<header className={classes.header}>
    <img src={logo} alt='logo' className={classes.img}/>
    <nav><ul className={classes.ul}>
        <li className={classes.li}>Pricing</li>
        <li className={classes.li}>Product</li>
        <li className={classes.li}>About Us</li>
        <li className={classes.li}>Careers</li>
        <li className={classes.li}>Community</li>
        </ul></nav>
     
   

        <button type='button' className={classes.btn}>Get Started</button>
  <img src={ham} alt='hamburger' onClick={Hide} className={hide?`${classes.imgm}`:`${classes.partm1}`}/>
</header>

<div className={classes.wrapper}>
<section className={classes.sec}>
<div className={classes.div}>
    <h1 className={classes.h1}>Bring everyone together to build better products.</h1>
    <p className={classes.p1} >MAnage makes it simple for software teams to planday-to-day tasks while keeping the larger team goals in view.</p>
    <button type='button' className={classes.btn1}>Get Started</button>
    
</div>
<div className={classes.div1}>
    <img src={intro} alt='intro' className={classes.img1}/>
</div>
</section>


<section className={classes.sec1}>
<article className={classes.div}>

        <h1 className={classes.h1}>What's different about Manage?</h1>
        <p className={classes.p1}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </article>

    <div className={classes.div1a}>
    <article className={classes.art}>
        <div className={classes.divm}>
        <p className={classes.p3}>01</p>
        <p className={classes.p4m} >Track company-wide progress</p>

        </div>
     
        <div className={classes.div2}>

            <p className={classes.p4} >Track company-wide progress</p>
            <p className={classes.p5} >See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestones level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
        </div>
    </article>
    
    <article className={classes.art}>
    <div className={classes.divm}>
    <p className={classes.p3}>02</p>
    <p className={classes.p4m} >advanced built-in reports</p>
   
    </div>

        <div className={classes.div2}>

            <p className={classes.p4} >advanced built-in reports</p>
            <p className={classes.p5} >Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
        </div>
    </article>

    <article className={classes.art}>
    <div className={classes.divm}>
    <p className={classes.p3}>03</p>
    <p className={classes.p4m} >Everything you need in one place</p>

    </div>
        
        <div className={classes.div2}>
            <p className={classes.p4} >Everything you need in one place</p>
            <p className={classes.p5} >Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers on all-in-one team productivity solution.</p>
        </div>
    </article>
    </div>
</section>
</div>

<div className={hide?`${classes.partm}`:`${classes.part}`}>
        <img src={close} alt='close' onClick={Hide} className={classes.close}/>
     <div className={classes.backdrop } onClick={Hide}></div>
      <ul className={classes.overlay}>
        <li className={classes.li}>Pricing</li>
        <li className={classes.li}>Product</li>
        <li className={classes.li}>About Us</li>
        <li className={classes.li}>Careers</li>
        <li className={classes.li}>Community</li>
        </ul>
        </div>

</Wrapper>
}
export default MainPage