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
