import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import PublicIcon from '@mui/icons-material/Public';
import FunctionsIcon from '@mui/icons-material/Functions';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
// import SettingsIcon from '@mui/icons-material/Settings';
// import TimerIcon from '@mui/icons-material/Timer';
// import DevicesIcon from '@mui/icons-material/Devices';

export const mainNavBarItems =[
    {
        id:0,
        icon:<PeopleIcon/>,
        label:'Authentication',
        route: 'authentication',
    },
    {
        id:1,
        icon:<StorageIcon/>,
        label:'Database',
        route: 'database',
    },
    {
        id:2,
        icon:<PermMediaIcon/>,
        label:'Storage',
        route: 'storage',
    },
    {
        id:3,
        icon:<PublicIcon/>,
        label:'Hosting',
        route: 'hosting',
    },
    {
        id:4,
        icon:<FunctionsIcon/>,
        label:'Functions',
        route: 'functions',
    },
    {
        id:5,
        icon:<CandlestickChartIcon/>,
        label:'Machine Learning',
        route: 'machinelearning',
    },
    // {
    //     id:6,
    //     icon:<SettingsIcon/>,
    //     label:'Analytics',
    //     route: 'analytics',
    // },
    // {
    //     id:7,
    //     icon:<TimerIcon/>,
    //     label:'Performance',
    //     route: 'performance',
    // },
    // {
    //     id:8,
    //     icon:<DevicesIcon/>,
    //     label:'Test Lab',
    //     route: 'testlab',
    // }

]
