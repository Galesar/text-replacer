import { useEffect, useState } from 'react';
import TextArea from '../components/textArea';
import { ciclemen, ciclewomen } from '../scripts/textReplacer';
import styles from '../static/styles/index.module.css';

export default function index() {
    const [value, setValue] = useState('');
    const [sex, setSex] = useState('М');
    const [active, setActive] = useState([{
        active: true,
        sex: 'М',
        name: 'Мужчина'
    }, {
        active: false,
        sex: 'Ж',
        name: 'Женщина'
    }]);

    const sexArrayHandler = () => {
        setActive(prevState => {
            for(let i = 0; i < prevState.length; i++) {
                if(prevState[i].active == true) {
                    let counter;
                    if(i + 1 == prevState.length) {counter = 0}
                    else counter = i + 1;
                    prevState[i].active = false;
                    prevState[counter].active = true;
                    setSex(prevState[counter].sex)
                    break;
                }
            }
            const newArr = [...prevState];
            return newArr;
        })
    }

    useEffect(() => {
        syncText(value);
    }, [sex])

    const syncText = (value) => {
        if(sex == 'М') {
            value = ciclemen(value);
        }
        else if (sex == 'Ж') {
            value = ciclewomen(value);
        }
        setValue(value);
    }

    return(
        <div>
            <style jsx global>
                {`
                body {
                    background-image: linear-gradient(45deg, #1e1e1e, #4b4e54);
                    background-repeat: no-repeat;
                    min-height: 100vh;
                    overflow: hidden;
                }
                .active {
                    color:#242425!important;
                    background-color:#cce3fa;
                }
                `}
            </style>
            <center><h1 className={styles.title}>Lorem Ipsum</h1></center>
            
            <center>
            <div className={styles.textArea}>
            <TextArea readOnly={false} placeholder={"Введите ваш текст"} value={null} syncText={syncText}/>
            <TextArea readOnly={true} placeholder={"Результат"} value={value} />
            </div>
            </center>
            
            <center>
            <div className={styles.buttonContainer}>
                {
                    active.map((item, index) => {
                        if(item.active == true) {
                            return <a href="#" className='active' onClick={(e) => { sexArrayHandler()} }>{item.name}</a>
                        }
                        else return <a href="#" onClick={(e) => sexArrayHandler()}>{item.name}</a>
                    })
                }
            </div>
            </center>
        </div>
    )
}