import {  Input } from '@chakra-ui/react';
import { useRef } from 'react';
import '@/index.css';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch} : Props) => {

  const ref = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (ref.current) {
        onSearch(ref.current.value)
        ref.current.value = "";
      }
    }}>
      <Input ref={ref} borderRadius={20} placeholder='Search movies...' variant='outline'/>
    </form>
  )
}

export default SearchInput
