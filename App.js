/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Modal
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import API from './constant/API';
import ApiClient from './util/ApiClient';


this.state = {
  param: '',
  receipt: '',
  showItem: false,
  showModal:false,
  receiptData: [
    {
      store: '99 Speedmart',
      name: 'Hayden',
      receiptCode: '#0001',
      item: [
        {
          name: 'Milk',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Milo',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Sugar',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Salt',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        }
      ]
    },
    {
      store: '7-11',
      name: 'Joyce',
      receiptCode: '#0002',
      item: [
        {
          name: 'Milk',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Milo',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Sugar',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Salt',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        }
      ]
    },
    {
      store: 'Grocer',
      name: 'Mike',
      receiptCode: '#0003',
      item: [
        {
          name: 'Milk',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Milo',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Sugar',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Salt',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        }
      ]
    },
    {
      store: 'Tesco',
      name: 'Peter',
      receiptCode: '#0004',
      item: [
        {
          name: 'Milk',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Milo',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Sugar',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Salt',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        }
      ]
    },
    {
      store: 'Aeon',
      name: 'Max',
      receiptCode: '#0005',
      item: [
        {
          name: 'Milk',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Milo',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Sugar',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        },
        {
          name: 'Salt',
          price: '2.00',
          quantity: '3',
          remarks: 'None',
        }
      ]
    },

  ]
}



getReceipt = async () => {
  try {

    const response = await axios.get(
      'https://my-json-server.typicode.com/haydensoo96/testdb/receipt',
    ).then(result => {
      this.setState({ receipt: response })
    })

    alert(JSON.stringify(response.data));
  } catch (error) {
    // handle error
    alert(error.message);
  }
};


componentDidMount = () => {
  this.getReceipt();
}

renderOrderItems = ({ item }) => (
  <View style={styles.bottomPart}>
    <View style={[styles.topPart, { flex: 0.5 },]}><Icon name={'checkbox'} size={25} style={{ color: item.isCheck == true ? Colors.primaryColor : 'grey' }} /></View>
    <View style={[styles.topPart, { flex: 2 }]}><Text>{item.name}</Text><Text style={{ fontSize: 15, color: 'grey' }}>Remarks{item.item.remarks}</Text></View>
    <View style={styles.topPart}><Text>x{item.item.quantity}</Text></View>
    <View style={styles.topPart}><Text>RM{item.item.price}</Text></View>
  </View>
)


showOrderItem = () => {

  <Modal
  animationType={'fade'}
  transparent={false}>
    <View style={{flex:1,height:'100%',width:'100%',backgroundColor:'red'}}>

    </View>
  </Modal>

}

renderReceipt = ({ item }) => (
  <View style={[styles.insideFlat]}>

    <View style={{ flexDirection: 'row', padding: 10, alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: '#E5E4E2' }}>
      <View style={styles.topPart}>
        <Text style={{ fontSize: 15, alignSelf: 'center' }}>{item.store == null ? null : item.store}</Text>
        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'grey' }}>Store</Text>
      </View>
      <View style={[styles.topPart, { flex: 2, alignItems: 'center' }]}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontSize: 15, alignSelf: 'center' }}>{item.name == null ? null : item.name}</Text>
          <Text style={{ alignSelf: 'center', fontSize: 10, color: 'grey' }}>Name</Text>
        </View>
      </View>
      <View style={[styles.topPart, { flex: 2, alignItems: 'center' }]}>
        <Text style={{ fontSize: 15, alignSelf: 'center' }}>{item.receiptCode == null ? null : item.receiptCode}</Text>
        <Text style={{ alignSelf: 'center', fontSize: 10, color: 'grey' }}>Serial Number</Text>
      </View>
      <TouchableOpacity onPress={() => { this.showOrderItem(item) }}>
        <View style={[styles.topPart, { flex: 1 },]}><Text style={{ color: 'grey', fontSize: 10 }}>Details</Text></View>
      </TouchableOpacity>
    </View>
  </View>
)




const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{ flex: 1, height: '100%', width: '100%' }}>

        <View style={{ height: '10%', width: '100%', backgroundColor: '#C0C0C0', justifyContent: 'center', shadowOffset: 10, shadowRadius: 5 }}>
          <Text style={{ alignSelf: 'center', fontSize: 30, color: 'white' }}>My receipt</Text>
        </View>

        <View style={{ height: '90%', width: '100%' }}>

          <FlatList style={{ paddingVertical: 2 }}
            data={this.state.receiptData}
            renderItem={this.renderReceipt}
            keyExtractor={(item, index) => String(index)} />

        </View>

      </SafeAreaView>



    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  topFlat: {
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowRadius: 3,
    shadowOpacity: 20,
    shadowOffset: { width: 1, height: 1 },
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    width: 60,
  },
  section: {
    height: '20%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  circle: {
    height: 65,
    width: 65,
    borderRadius: (65) / 2,
    borderWidth: 1,
    borderColor: Colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallCircle: {
    width: 25,
    height: 25,
    backgroundColor: Colors.primaryColor,
    borderRadius: 12.5,
    position: 'absolute',
    top: -5,
    right: -5,
    alignItems: 'center',
    justifyContent: 'center'

  },
  smallCircleFont: {
    color: 'white',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 15
  },
  circleIcon: {
    width: '50%',
    height: "50%",
    resizeMode: 'contain'
  },
  insideFlat: {
    margin: 10,
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,
    backgroundColor: Colors.fieldtBgColor,
    borderColor: 'grey',
    borderWidth: 1
  },
  topFlat: {
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowRadius: 3,
    shadowOpacity: 20,
    shadowOffset: { width: 1, height: 1 },
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,

  },
  topPart: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    flex: 3,
    alignSelf: 'center',
  },
  bottomPart: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 10
  },
  primaryFont: {
    fontFamily: 'NunitoSans-Regular'
  },
  insideSwipe: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    flexDirection: 'row',

  },
  swipeButton: {
    fontFamily: 'NunitoSans-Regular',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60
  },
  swipeFont: {
    fontSize: 14,
    fontFamily: 'NunitoSans-Bold'
  },
})
export default App;
