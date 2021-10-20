import Food from './components/Food'

const App = () => {
    const foodsData = [
        {
            title: 'ข้าวกระเพราไข่ดาว',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/3kec4fuy4i1m.jpg',
            calories: 630,
        },
        {
            title: 'ผัดซีอิ๊วหมู',
            picUrl: 'https://s359.kapook.com/pagebuilder/cd21f90c-96ed-4e2a-96f5-99e0a59e9bad.jpg',
            calories: 679,
        },
        {
            title: 'ข้าวผัดหมู',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/ytguxuwjzdxh.jpg',
            calories: 557,
        },
        {
            title: 'ข้าวไข่ข้น',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/hu49g6guru7e.jpg',
            calories: 557,
        },
        {
            title: 'ข้าวไข่เจียว',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/zuc3nbcnqmrv.jpg',
            calories: 470,
        },
        {
            title: 'บะหมี่กรอบราดหน้ารวมมิตร',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/os1dmpsqfg7v.jpg',
            calories: 690,
        },
        {
            title: 'ผัดไทยกุ้งสด',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/gdfb9vuw00ub.jpg',
            calories: 585,
        },
        {
            title: 'ข้าวคะน้าหมูกรอบ',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/y1cih1ukoily.jpg',
            calories: 650,
        },
        {
            title: 'ข้าวหมูกระเทียม',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/1s8mddsoins9.jpg',
            calories: 495,
        },
        {
            title: 'สุกี้แห้งทะเล',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/jgv5xxyygjav.jpg',
            calories: 280,
        },
        {
            title: 'ข้าวต้มกุ้ง',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/dgug76ufp4qz.jpg',
            calories: 226,
        },
        {
            title: 'ข้าวราดปลาหมึกผัดไข่เค็ม',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/codsqyki0rg6.jpg',
            calories: 600,
        },
        {
            title: 'ก๋วยเตี๋ยวคั่วไก่',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/jga3azycjch2.jpg',
            calories: 435,
        },
        {
            title: 'สุกี้น้ำหมู',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/pdnbuktohl3h.jpg',
            calories: 320,
        },
        {
            title: 'ข้าวผัดเบคอนแฮม',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/8zfhk2aezv80.jpg',
            calories: 390,
        },
        {
            title: 'ข้าวผัดปู',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/fwko9uh1qugq.jpg',
            calories: 610,
        },
        {
            title: 'สปาเก็ตตี้ผัดกะเพรา',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/acpnrmyjj7de.jpg',
            calories: 244,
        },
        {
            title: 'ข้าวผัดกระเพรากุ้ง',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/nyjhwl0jcxvv.jpg',
            calories: 540,
        },
        {
            title: 'ข้าวมันไก่',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/paffnr5w5dni.jpg',
            calories: 570,
        },
        {
            title: 'ก๋วยเตี๋ยวหมู',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/sd9np5c6sczp.jpg',
            calories: 450,
        },
        {
            title: 'สปาเก็ตตี้ผัดขี้เมาไก่',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/kjoysuhmmh7m.jpg',
            calories: 480,
        },
        {
            title: 'ข้าวมันไก่ทอด',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/p70to6izkv2w.jpg',
            calories: 650,
        },
        {
            title: 'ข้าวหมูแดงหมูกรอบ',
            picUrl: 'https://img.proxumer.com/p/1200x0/2019/01/28/2hy29xvosg2k.jpg',
            calories: 580,
        },
    ]
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <Food foodsData={foodsData} />
            </div>
        </>
    )
}

export default App
