import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import '../styles/home.css';
import Question from './Question';
import Timer from './Timer';



const Home = (props) => {
    const [data, setData] = useState();
    const [categories, setCategories] = useState();
    const [pickCategory, setpickCategory] = useState({});
    const [type, setType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [totalQuestions, setTotalQuestions] = useState(50);

    const { correctAnswer } = (props.location && props.location.correctAnswer) || {};

    const history = useHistory();


    // const url = `https://opentdb.com/api_category.php`;

    useEffect(() => {

        fetch("https://opentdb.com/api_category.php")
            .then((res) => res.json())
            .then(response => setCategories(response.trivia_categories))
        return () => {
            setCategories([]);
        };
        // console.log(categories)
    },
        [setCategories]);

    const handleClick = (e) => {
        // history.push("/quiz");
        e.preventDefault();
        alert(`${pickCategory} ${type} ${difficulty}${totalQuestions} `)

        props.history.push({
            pathname: '/question',
            pickCategory:{pickCategory},
            type:{type},
            difficulty:{difficulty},
            totalQuestions:{totalQuestions}
          });

 
     
    }

    return (<div className='home'>

        <div className='home__body'>
            <div className='home__body__text'>Cutomize Your Quiz</div>
{console.log(correctAnswer)}
            <div className='home__options'>

                Category:<select onChange={e => setpickCategory(e.target.value)} value={pickCategory}>
                    <option value='' >All</option>
                    {categories?.map(({ id, name }) => <option value={id} key={id}>{name}</option>)}
                </select>

                Type:<select onChange={e => setType(e.target.value)} value={type} >
                    <option value='' >All</option>
                    <option value='multiple' >Multiple</option>
                    <option value="boolean">True/False</option>

                </select>
                Difficulty: <select onChange={e => setDifficulty(e.target.value)} value={difficulty}>
                    <option value='' >All</option>
                    <option value='hard' >Hard</option>
                    <option value='medium' >Medium</option>
                    <option value='easy' >Easy</option>
                </select>

                Total Questions: <input onChange={e => setTotalQuestions(e.target.value)} value={totalQuestions} />

<p>{correctAnswer}</p>
                <Link to='/question'><button type='submit' onClick={handleClick}>Start</button></Link>
            </div>

        </div>
    </div>)
};

export default Home;
