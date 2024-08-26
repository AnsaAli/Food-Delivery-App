# Created this web from swiggy datas.

# data added
const [listData, setListData] = useState(cardDatas);
here cardDatas is the hard coded data from utility mockData.

# data is fetching from swiggy using useEffect.
useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.033826&lng=76.312538&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ); //fetch is from browser, js engine

        const json = await data.json();
        console.log(json)

    }


# customhook useRestaurantMenyu added to move the fetching concept from RestaurantMenu.js

  //defined a custom hook to fetch the restaurant datas in useRestaurantMenu

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   const fetchMenu = async () => {
  //     const data = await fetch(Menu_Api + resId);
  //     const json = await data.json();

  //     setResInfo(json.data);
  //   };


# Body fetching added to another cudtomHook 
// const [listData, setListData] = useState(cardDatas);
    // const [filterData, setfilterData] = useState(cardDatas); 
    // const [listData, setListData] = useState([]);
    // const [filterData, setfilterData] = useState([]);
    //this is used for to do saerch while we have alredy  

// useEffect(() => {
    //     fetchData();
    // }, []);


    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.033826&lng=76.312538&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }

    //         const json = await response.json(); // Parse the JSON data from the response
    //         setListData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //         setfilterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };
