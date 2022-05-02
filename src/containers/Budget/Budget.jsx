import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Budget.scss';
const Budget = () => {
    const [budget, setBudget] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1})
    useEffect(() => {
      const query = '*[_type == "budget"]';

      client.fetch(query)
        .then((data) => {
            setBudget(data);
        });
    }, []);
    
    const budg = budget[currentIndex];

    const handleClick = (index) => {
        setAnimateCard([{x:100, opacity: 0}])


        
        setTimeout(() => {

        setCurrentIndex(index);

        setAnimateCard([{x:0, opacity: 1}])
        
        }, 500);

        
    }

  return (
    <>
        { budget.length && (
            <>
                <motion.div 
                    animate={animateCard}
                    transition={{duration: 0.2, delayChildren: 0.5}}
                    className='app__budget-item app__flex'
                >
                    <div className='app__budget-content'>
                        <h4 className='bold-text'>{budg.name}</h4>
                        <p className='p-text'>{budg.description}</p>
                        <div>
                            {budg.offers.map((offer) => (
                                <p className='p-text'>· {offer}.</p>
                            ))}
                        </div>
                    </div>
                    
                    <a href='#contact'>Contact Me</a>
                    
                </motion.div>


                <div className='app__budget-btns app__flex'>
                    <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? budget.length - 1 : currentIndex - 1)}>
                        <HiChevronLeft />
                    </div>
                    <div className="app__flex" onClick={() => handleClick(currentIndex === budget.length - 1 ? 0 : currentIndex + 1)}>
                        <HiChevronRight />
                    </div>
                </div>
            </>
        )}
    </>
  )
}

export default AppWrap(MotionWrap(Budget, 'app__budget'), 'budget', 'app__whitebg')