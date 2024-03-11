/**
 * Tìm hiểu React Redux
 * Màn hình: Home
 * Biên tập: VNTALKING.COM
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/countAction';

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count.count);

  const handleIncreament = () => {
    console.log("Tăng điểm");
    dispatch(increment());
  };
 
  const handleDecreament = () => {
    console.log("Giảm điểm");
    dispatch(decrement());
  };
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', backgroundColor:"#cc3333"}}>
        <Text style={styles.textHeader}>Giới thiệu sử dụng Redux</Text>
        <Text style={{color: "#FFFFFF"}}>VNTALKING.COM</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title_text}>Bộ đếm 2.0</Text>
        <Text style={styles.counter_text}>{count}</Text>
  
        <TouchableOpacity onPress={handleIncreament} style={styles.btn}>
          <Text style={styles.btn_text}> Tăng điểm </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          onPress={handleDecreament}
          style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
          <Text style={styles.btn_text}> Giảm điểm </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
    color: '#D64545'
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
})

export default Home;