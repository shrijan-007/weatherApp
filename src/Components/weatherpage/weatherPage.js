import './weatherPage.css';

const WeatherPage =(Fulldata)=>{

    return(
        <>
        <div className='container-dashboard'>
            {JSON.stringify(Fulldata)}
        </div>
        </>
    );


};
export default WeatherPage;