import react from 'react'; 
import Card from './Card';
import details from '../details';


function createCard(detail) {
    return (
        <Card 
        key={detail.id}
        name={detail.name}
        image={detail.image}
        link={detail.link}
        language={detail.language}
        />
    );

}

function App() {
    return (
            <div className='main-grid'>
                {details.map((createCard))}
           </div>
           /* <Card 
            name ={details[0].name}
            image={details[0].image}
            link={details[0].link}
            language={details[0].language}
             />
             <Card 
            name ={details[1].name}
            image={details[1].image}
            link={details[1].link}
            language={details[1].language}
             />
             <Card 
            name ={details[2].name}
            image={details[2].image}
            link={details[2].link}
            language={details[2].language}
             />
             <Card 
            name ={details[3].name}
            image={details[3].image}
            link={details[3].link}
            language={details[3].language}
             />
             <Card 
            name ={details[4].name}
            image={details[4].image}
            link={details[4].link}
            language={details[4].language}
             />
              <Card 
            name ={details[5].name}
            image={details[5].image}
            link={details[5].link}
            language={details[5].language}
             />
             <Card 
            name ={details[6].name}
            image={details[6].image}
            link={details[6].link}
            language={details[6].language}
             />
             <Card 
            name ={details[7].name}
            image={details[7].image}
            link={details[7].link}
            language={details[7].language}
             />
             <Card 
            name ={details[8].name}
            image={details[8].image}
            link={details[8].link}
            language={details[8].language}
             />
             <Card 
            name ={details[9].name}
            image={details[9].image}
            link={details[9].link}
            language={details[9].language}
             />
             <Card 
            name ={details[10].name}
            image={details[10].image}
            link={details[10].link}
            language={details[10].language}
             />
         */
                
       
    );
}
export default App;