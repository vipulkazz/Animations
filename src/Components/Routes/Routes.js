import React from 'react';
import {Icon} from 'native-base';
import {TouchableOpacity, FlatList} from 'react-native';
import {createBox, createText} from '@shopify/restyle';

const Box = createBox();
const Text = createText();
const data = [
  {
    id: 1,
    value: 'DropDown',
  },
];

export default props => {
  const {navigation} = props;

  /**
   * @function navigateToContainer
   * @Description navigate to screen.
   */
  const navigateToContainer = value => {
    navigation.navigate(value);
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.id.toString()}
      ItemSeparatorComponent={() => {
        return (
          <Box height={1} backgroundColor="secondary3" marginHorizontal="l" />
        );
      }}
      renderItem={({item}) => {
        const {value} = item;
        return (
          <TouchableOpacity
            onPress={() => {
              navigateToContainer(value);
            }}>
            <Box
              justifyContent="center"
              mb="s"
              flexDirection="row"
              alignItems="center"
              height={50}>
              <Text variant="black20Medium">{value}</Text>
              <Box ml="l">
                <Icon type="AntDesign" name="rightcircle" />
              </Box>
            </Box>
          </TouchableOpacity>
        );
      }}
    />
  );
};
