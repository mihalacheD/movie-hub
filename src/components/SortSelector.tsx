import {  MenuItem, Button, MenuContent, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  value: string,
  onSelectOptions: (option: string) => void;
}

const SortSelector = ({ value, onSelectOptions }: Props) => {

const sortOrders = [
  { value: 'popularity.desc', label: 'Most Popular'},
  { value: 'popularity.asc', label: 'Least Popular'}, 
  { value: 'vote_average.desc', label: 'Top Rated'},
  { value: 'vote_average.asc', label: 'Lowest Rated'},
  { value: 'release_date.desc', label: 'Newest Releases'},
  { value: 'release_date.asc', label: 'Oldest Releases'},
]

const currentValue = sortOrders.find(order => order.value === value)


  return (
    <MenuRoot>

        <MenuTrigger asChild>
          <Button size='lg' variant="outline" >
          Order by : {currentValue?.label}<BsChevronDown/>
          </Button>
      </MenuTrigger>

      <MenuContent>
        {sortOrders.map((order) =>
        <MenuItem
           key={order.value}
           value={order.value}
           onClick={() => onSelectOptions(order.value)}
           >{order.label}
        </MenuItem>)}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
