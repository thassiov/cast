import React, { FC } from 'react';
import SelectInput from 'ink-select-input';

import {Item} from 'ink-select-input/build/SelectInput';
import {Box} from 'ink';
import {ICommandDescriptor} from '../../definitions/ICommandDescriptor';

type MenuListProps = {
  handleSelect: (commandId: number) => void;
  handleHightlight: (commandId: number) => void;
  commandDescriptors: Array<ICommandDescriptor>;
};

const MenuList: FC<MenuListProps> = ({ commandDescriptors, handleSelect, handleHightlight }: MenuListProps) => {
  const onInputSelected = (item: Item<number>) => {
    handleSelect(item.value);
  }

  const onInputHighlighted = (item: Item<number>) => {
    handleHightlight(item.value);
  }

  const getItensForSelectInput = (commandDescriptors: Array<ICommandDescriptor>) => {
    return commandDescriptors
     .map((item: ICommandDescriptor, idx: number) => ({
         label: item.nameAlias,
         value: idx,
       })
     );
  }

 return (
   <Box
   width={'40%'}
   flexDirection="column"
   alignSelf='flex-end'>
     <SelectInput
       limit={parseInt(process.env.MENU_HEIGHT as string)}
       items={getItensForSelectInput(commandDescriptors)}
       onSelect={onInputSelected}
       onHighlight={onInputHighlighted}
       />
   </Box>
 );
}

export default MenuList;