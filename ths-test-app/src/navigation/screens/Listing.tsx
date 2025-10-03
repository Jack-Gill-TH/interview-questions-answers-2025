import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useNavigation, StackActions } from "@react-navigation/native";


export default function ListingScreen({ route }) {
  const navigation = useNavigation();
  const { listingId } = route.params;
  const [ listingData, setListingData ] = useState(null);
  const insets = useSafeAreaInsets();

  const { title } = listingData || {};
  
    useEffect(() => {
        fetch(`/api/listings/${listingId}`)
          .then(response => response.json())
          .then(data => {
            if (data.error) {
              navigation.dispatch({
                ...StackActions.replace('NotFound'),
                source: undefined,
              });
              return;
            }
            setListingData(data);
          });
    }, [listingId, navigation]);
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <Text>Listing ID: {listingId}</Text>
      {title && (<Text>{title}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: '100%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
