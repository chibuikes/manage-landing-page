import React, {useState} from 'react'
import classes from './Footer.module.css'
import logo from './logo.svg'
import twt from './icon-twitter.svg'
import twt1 from './icon-twitter copy 2.svg'
import fb from './icon-facebook.svg'
import fb1 from './icon-facebook copy.svg'
import yt from './icon-youtube.svg'
import yt1 from './icon-youtube copy.svg'
import pin from './icon-pinterest.svg'
import pin1 from './icon-pinterest copy.svg'
import insta from './icon-instagram.svg'
import insta1 from './icon-instagram copy.svg'

const Footer =()=>{
    const [you, setYou]=useState(true)
    const [twi, setTwi]=useState(true)
    const [fac, setFac]=useState(true)
    const [pint, setPint]=useState(true)
    const [ins, setIns]=useState(true)
    const [val, setVal]= useState('')
    const [red, setRed]= useState(false)
    const change=(e)=>{
      setVal(e.target.value)
      if(val.includes('@')){

        setRed(false)
      }
    }
    const submit =(e)=>{
        e.preventDefault()

        if(val.includes('@'||val.length===0)){
            setRed(false)
            setVal('')
        }
        else{
            setRed(true)
        }
    }
    const yout= ()=>{
        setYou((val)=>{ return !val})
    }
    const twit= ()=>{
        setTwi((val)=>{ return !val})
    }
    const face= ()=>{
        setFac((val)=>{ return !val})
    }
    const pinte= ()=>{
        setPint((val)=>{ return !val})
    }
    const inst= ()=>{
        setIns((val)=>{ return !val})
    }
     return <footer className={classes.footer}>
         <section className={classes.sec}>
            <div></div>
            <p className={classes.p}>  Simplify how your team works today. </p>
        <div></div>
         <button type='button' className={classes.btn}> Get Started</button>
         </section>
         
         <section className={classes.sec1}>
            <div className={classes.none}></div>
             
            <div className={classes.grid}>
            <img src={logo} alt='logo'  className={classes.img1} />
            <div className={classes.flex}>

                <a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={face} onMouseLeave={face}>{
                    fac?<img src={fb} alt='' className={classes.img}/>:<img src={fb1} alt='' className={classes.img}/>
                }</a>
                <a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={yout} onMouseLeave={yout}>{
                    you?<img src={yt} alt='' className={classes.img}/>:<img src={yt1} alt='' className={classes.img}/>
                }</a>
                <a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={twit} onMouseLeave={twit}>{
                twi?<img src={twt} alt='' className={classes.img}/>:<img src={twt1} alt='' className={classes.img}/>}
                </a>
                <a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={pinte} onMouseLeave={pinte}>{
                    pint?<img src={pin} alt='' className={classes.img}/>:<img src={pin1} alt='' className={classes.img}/>
                }</a>
                <a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={inst} onMouseLeave={inst}>{
                 ins?<img src={insta} alt='' className={classes.img}/>  :  <img src={insta1} alt='' className={classes.img}/>

            }</a>
            </div>
            </div>

            <div className={classes.grid2}>
                <p className={classes.p1}>Home</p>
                <p className={classes.p1}>Pricing</p>
                <p className={classes.p1}>Products</p>
                <p className={classes.p1}>About Us</p>
            </div>

             <div className={classes.grid3}>
                <p className={classes.p3}>Careers</p>
                <p className={classes.p3}>Community</p>
                <p className={classes.p3}> Privacy Policy </p>
            </div>
            <div className={classes.grid1}>
                <form className={classes.form} onSubmit={submit}>
                    <input type='email' required value={val} onChange={change}
                     placeholder='Updates in your inbox...' className={classes.input}/>
                    <button type='submit' onClick={submit} className={classes.btn1}>Go</button>
                   {red?
                    <p className={classes.red}>please insert a valid email</p>:''
                }
                </form>
                <p className={classes.p2}> Copyright 2020 All Right Reserved</p>
            </div>
         </section> 
         
           <section className={classes.sec1m}>

                <form className={classes.form} onSubmit={submit}>
                    <input type='email' required value={val} onChange={change}
                     placeholder='Updates in your inbox...' className={classes.input}/>
                    <button type='submit' onClick={submit} className={classes.btn1m}>Go</button>
                   {red?
                    <p className={classes.red}>please insert a valid email</p>:''
                }
                </form>
            

            <main className={classes.amin}>
            <div className={classes.grid2}>
                <p className={classes.p1}>Home</p>
                <p className={classes.p1}>Pricing</p>
                <p className={classes.p1}>Products</p>
                <p className={classes.p1}>About Us</p>
            </div>

             <div className={classes.grid3}>
                <p className={classes.p3}>Careers</p>
                <p className={classes.p3}>Community</p>
                <p className={classes.p3}> Privacy Policy </p>
            </div>
          
            </main>
            <div className={classes.flex}>

<a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={face} onMouseLeave={face}>{
    fac?<img src={fb} alt='' className={classes.img}/>:<img src={fb1} alt='' className={classes.img}/>
}</a>
<a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={yout} onMouseLeave={yout}>{
    you?<img src={yt} alt='' className={classes.img}/>:<img src={yt1} alt='' className={classes.img}/>
}</a>
<a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={twit} onMouseLeave={twit}>{
twi?<img src={twt} alt='' className={classes.img}/>:<img src={twt1} alt='' className={classes.img}/>}
</a>
<a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={pinte} onMouseLeave={pinte}>{
    pint?<img src={pin} alt='' className={classes.img}/>:<img src={pin1} alt='' className={classes.img}/>
}</a>
<a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08' onMouseEnter={inst} onMouseLeave={inst}>{
 ins?<img src={insta} alt='' className={classes.img}/>  :  <img src={insta1} alt='' className={classes.img}/>

}</a>
</div>


 <img src={logo} alt='logo'  className={classes.img1} />

    
<p className={classes.p2}> Copyright 2020 All Right Reserved</p>

         </section>


         
     </footer>
}
export default Footer