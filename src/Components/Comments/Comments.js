import React,{useState} from 'react'
import classes from './Comments.module.css'
import rich from './avatar-richard.png'
import ani from './avatar-anisha.png'
import ali from './avatar-ali.png'
import gou from './avatar-shanai.png'

const Comments=()=>{
    const [val, setVal]= useState(1)
    const arr1=[ani,ali,rich, gou]
    const arr=[
        {id:0, name:'Anisha LI', comment:` "Manage has supercharged our team's workflow. The ability to maintain visibility on longer milestones at all times keeps everyone motivated."
        `},{id:1,name:`Ali Bravo`, comment:` e have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
        `},{id:2,name:`Richard Watts`, comment:`"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them everyone I talk to!"`}
        ,{id:3,name:`Shanai Gough`, comment:`'Their software allows us to track, manage and  collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.'`}

    ]
    const zero=()=>{
        return setVal(0)
    }
    const one =()=>{
        return setVal(1)
}

const two=()=>{
    return setVal(2)
}
const three =()=>{
   return  setVal(3)
}
    return <React.Fragment>
<section className={classes.sec2}>
    <h2 className={classes.h2}>What they've said</h2>
 
<div className={classes.scroll}>
    <main className={classes.main}>
    <div className={classes.contain}>
        <article className={classes.art2}>
        <img src={ani} alt='anisha' className={classes.img4}/>
            <p className={classes.p6}>Anisha LI</p>
         <p className={classes.p7}>"Manage has supercharged our team's workflow. The ability to maintain visibility on longer milestones at all times keeps everyone motivated."
         </p>
        </article>
        </div>
    
        <div className={classes.contain}>
        <article className={classes.art2}>
        <img src={ali} alt='ali bravo' className={classes.img4}/>
        <p className={classes.p6}>Ali Bravo</p>
        <p className={classes.p7}>
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
        </p>
        </article>
        </div>


        <div className={classes.contain}>
        <article className={classes.art2}>
        <img src={rich} alt='richard' className={classes.img4}/>
        <p className={classes.p6}>Richard Watts</p>
        <p className={classes.p7}>"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them everyone I talk to!"</p>
        </article>
        </div>
        
        <div className={classes.contain}>
        <article className={classes.art2}>
        <img src={gou} alt='shanai Gough' className={classes.img4}/>
        <p className={classes.p6}>Shanai Gough</p>
        <p className={classes.p7}>'Their software allows us to track, manage and  collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.' </p>
        </article>
        </div>

       

    </main>
  
    </div>
    <section className={classes.secm}>
    <article className={classes.art2}>
        <img src={arr1[val]} alt='person' className={classes.img4}/>
            <p className={classes.p6}>{arr[val]['name']}</p>
         <p className={classes.p7}> {arr[val]['comment']}</p>
        </article>
        <div className={classes.divm}>
            <div onClick={zero} className={val===0?`${classes.artm1}`:`${classes.artm}`}></div>
            <div onClick={one} className={val===1?`${classes.artm1}`:`${classes.artm}`}></div>
            <div onClick={two} className={val===2?`${classes.artm1}`:`${classes.artm}`}></div>
            <div onClick={three} className={val===3?`${classes.artm1}`:`${classes.artm}`}></div>
        </div>
    </section>
    <button type='button' className={classes.btn2}>Get started</button>
</section>
{

    /** 
        <article className={classes.art2}>
        <img src={gou} alt='shanai Gough' className={classes.img4}/>
        <p className={classes.p6}>Shanai Gough</p>
        <p className={classes.p7}>'Their software allows us to track, manage and  collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.' </p>
        </article> */
}
    </React.Fragment>
}
export default Comments