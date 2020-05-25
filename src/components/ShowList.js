import React,{ useState, useEffect } from 'react';
import { Wrapper , LeftWrapper,RightWrapper,Grid ,ImgWrapper,TextWrapper,
    ULList,List,FilterWrapper,CheckBox,Label,LabelCheckBox,SearchInput,SearchWrapper,
    SearchButton,SearchLabel} from './styles'

const ShowList = (props) => {
    const [ characterList, setCharacterList] = useState();
    const [ selectedFilters,setSelectedFilters] = useState({});

    useEffect(() => {
        if(characterList === undefined){
            fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacterList(data));  
        
        }
    })

    const handleFilters = (event) => {
        let obj = selectedFilters;
        if(obj !== 'undefined'){
            obj[event.target.name] = [];
            obj[event.target.name].push(event.target.id)
        }
        setSelectedFilters(obj);
        getFilteredData();
    }
    const handleNameSearch = (event) =>{
        let obj = selectedFilters; 
        let value = document.getElementById('searchInput').value;
        if(obj !== 'undefined' && obj.hasOwnProperty("name")){
            let arr = obj['name']
            arr.push(value)
        }else{
            obj['name'] = [];
            obj['name'].push(value)
        }
        setSelectedFilters(obj);
        getFilteredData();
    }

    const getFilteredData = () =>{
        let filteredData = selectedFilters;
        // eslint-disable-next-line no-undef
        let url =""
        for(let data in filteredData){
            if(url !== '')url = url+'&'
           url += data+'='+filteredData[data];
        }
        fetch('https://rickandmortyapi.com/api/character/?'+url)
        .then(response => response.json())
        .then(data => setCharacterList(data));
    }

    const labelProps = { top:'1.5rem'}
    return (
        <Wrapper>
            
            <LeftWrapper><Label>{"Filters"}</Label>
            <FilterWrapper>
                <Label>Gender</Label>
                <br/>
                <LabelCheckBox onChange={ handleFilters }><CheckBox name={'gender'} id={'female'} />Female</LabelCheckBox>
                <br/>
               <LabelCheckBox onChange={ handleFilters }><CheckBox name={'gender'} id={'male'}/>Male</LabelCheckBox></FilterWrapper>

               <FilterWrapper>
                <Label>Species</Label>
                <br/>
                <LabelCheckBox onChange={ handleFilters }><CheckBox name={'species'} id={'human'}/>Human</LabelCheckBox>
                <br/>
               <LabelCheckBox onChange={ handleFilters }><CheckBox name={'species'} id={'alien'}/>Alien</LabelCheckBox>
               <LabelCheckBox onChange={ handleFilters } {...labelProps}><CheckBox name={'species'} id={'mythology'}/>Mythology</LabelCheckBox>
               </FilterWrapper>

               <FilterWrapper>
                <Label>Origin</Label>
                <br/>
                <LabelCheckBox onChange={ handleFilters }><CheckBox name={'origin'} id={'unknown'}/>Unknown</LabelCheckBox>
                <br/>
               <LabelCheckBox onChange={ handleFilters }><CheckBox name={'origin'} id={'post-apocalyptic'}/>Post-Apocalyptic Earth</LabelCheckBox>
               <LabelCheckBox onChange={ handleFilters } {...labelProps}><CheckBox name={'origin'} id={'nuptia 4'}/>Nuptia 4</LabelCheckBox>
               </FilterWrapper>

            </LeftWrapper>
        <RightWrapper>    
            <SearchWrapper><SearchLabel>{'Search By Name'
            }</SearchLabel><SearchInput id="searchInput" /><SearchButton name={'name'} onClick={ handleNameSearch } value={'search'}/></SearchWrapper>
            {characterList ? 
            characterList.results.map((item,index) => 
            // eslint-disable-next-line jsx-a11y/alt-text
            <Grid><ImgWrapper src={item.image} /><TextWrapper>{item.name}</TextWrapper>
            <ULList>
            <List>Status  : {item.status}</List>
            <List>Species : {item.species}</List>   
            <List>Gender  : {item.gender}</List> 
            <List>Origin  : {item.origin.name}</List> 
            </ULList></Grid>)
            : <></>}
       </RightWrapper></Wrapper>
    )
}
export default ShowList;