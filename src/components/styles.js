import styled from 'styled-components';

const Wrapper = styled.div`
 width:100%;
 display:flex;
 margin:2rem;
`
const LeftWrapper = styled.div`
width:12rem;
height:20rem;
margin-left: 2rem;
margin-right: 2rem;
`

const RightWrapper = styled.div`
width:80rem;
height:28rem;
display:table;
margin-top:3rem;
`
const Grid = styled.div`
@media (min-width: 425px) {
    width:8rem;
}
@media (min-width: 1000px) {
    width:14rem;
}
min-height:22rem;
margin:0.4rem;
float:left;
background-color:#dddddd;
`
const ImgWrapper = styled.img`
width:12rem;
height:12rem;
`
const TextWrapper = styled.div `
margin-top:0rem;
font-size: 18px;
margin-left: -3rem;
`
const ULList = styled.ul`
list-style: none;
font-size: 14px;
margin-left: -1rem;
`
const List = styled.li`
height:1.5rem;
text-align:left;
`
const FilterWrapper = styled.div`
border:1px solid #7F7F7F;
height:6rem;
font-size:12px;
margin-top:1rem;
text-align: left;
    padding-left: 2.5rem;
`
const CheckBox = styled.input.attrs({ type: 'radio' })`
width: 1rem;
`

const Label = styled.label`
font-size:16px;
font-weight:500;
`

const LabelCheckBox = styled.label`
position:absolute;
margin-top:${(props) => props.top ? props.top:'0.5rem'};
margin-left:-2rem;
`

const SearchInput = styled.input.attrs({ type: 'text' })`
width: 10rem;
position: absolute;
height: 1.2rem;
`

const SearchWrapper = styled.div`
position: absolute;
margin-top: ${(props) => props.top ? props.top:'-2rem'};
margin-left: 0.4rem;
`
const SearchButton = styled.input.attrs({ type: 'button' })`
width:5rem;
margin-left: 9.5rem;
height: 1.6rem;
position:absolute;
`
const SearchLabel = styled.label`
font-size:16px;
font-weight:500;
marging-top:1rem;
margin-left:1rem;
margin-right:1rem;
`

export {
    Wrapper,
    LeftWrapper,
    RightWrapper,
    Grid,
    ImgWrapper ,
    TextWrapper,
    ULList,
    List,
    FilterWrapper ,
    CheckBox ,
    Label,
    LabelCheckBox ,
    SearchInput,
    SearchWrapper,
    SearchButton,
    SearchLabel

}