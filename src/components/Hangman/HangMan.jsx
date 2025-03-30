import level1 from '../../assets/Images/1.svg';
import level2 from '../../assets/Images/2.svg';
import level3 from '../../assets/Images/3.svg';
import level4 from '../../assets/Images/4.svg';
import level5 from '../../assets/Images/5.svg';
import level6 from '../../assets/Images/6.svg';
import level7 from '../../assets/Images/7.svg';
import level8 from '../../assets/Images/8.svg';

function HangMan ({step}) {
    const images = [level1,level2,level3,level4,level5,level6,level7,level8];

    return (
        
        <div className='w-[350px]'>
            <img 
            src={step >= images.length? images[images.length-1] : images[step]}
             />
        </div>
        
        
    )
}

export default HangMan;