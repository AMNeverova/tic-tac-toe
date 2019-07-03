export const clickTabActionType = 'TAB-CLICK';

let initialState = [
    {
        id: 1,
        active: true,
        className: 'tab tab1 active',
        linkTo: '/',
        text: "Игра"
    },
    {
        id: 2,
        active: false,
        className: 'tab tab2',
        linkTo: '/scoreTable',
        text: "Таблица результатов"
    }
]

export const clickTabAC = (id) => {
    return {
        type: clickTabActionType,
        id: id
    }
}

let tabReducer = (state = initialState, action) => {
    if (action.type == clickTabActionType) {
        let stateCopy = state.map((item) => {
            return {...item}
        })

        stateCopy.map((item) => {
            item.active = false;
            document.querySelector(`.tab${item.id}`).classList.remove('active');
            if (item.id == action.id) {
                item.active = true;
                document.querySelector(`.tab${item.id}`).classList.add('active')
            }
        })
        return stateCopy
    }
    return state
}
    
    


export default tabReducer;