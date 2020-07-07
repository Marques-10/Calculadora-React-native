import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Topo from './src/components/Topo'
import Display from './src/components/Display'
import Numbers from './src/components/Numbers'
import Operators from './src/components/Operators'


const stateInitial = {
  displayValue: '0',
  clearDisplay: false,
  values: [0, 0],
  indice: 0,
  operation: null,
}

export default class App extends Component {

  state = { ...stateInitial }

    addNumber = e => {
        console.log(this.state)
        const display = this.state.clearDisplay ? '0' : this.state.displayValue
        const indice = this.state.indice
        const firstNumberZero = display === '0' && e == 0 ? true : false
        const firstNumberPonto = display == 0 && e == '.' ? true : false
        const existsPonto = display.includes('.') ? true : false

        if (firstNumberZero || existsPonto && e == '.') {
            if (indice == 1 && e == '0') {
                this.setState({
                    displayValue: e
                })
            }
            return
        }

        if (firstNumberPonto && !existsPonto) {
            const newValue = display + e
            const values = this.state.values
            values[indice] = newValue

            this.setState({
                displayValue: newValue,
                values,
                clearDisplay: false,
            })

        } else {

            if (display === '0') {
                const newValue = e
                const values = this.state.values
                values[indice] = newValue

                this.setState({
                    displayValue: newValue,
                    values,
                    clearDisplay: false,
                })
            }

            if (display !== '0') {
                const newValue = display + e
                const values = this.state.values
                values[indice] = newValue

                this.setState({
                    displayValue: newValue,
                    values,
                    clearDisplay: false,
                })
            }

        }

    }

    addOperator = e => {
        const indice = this.state.indice
        const newIndice = indice == 0 ? 1 : 0
        let operator = this.state.operation
        console.log('operação: ', operator)

        if (indice == 1) {
            
            const equals = operator == '='
            const values = this.state.values
            const result = eval(`${values[0]} ${operator} ${values[1]}`);
            values[0] = result
            values[1] = '0'
            let display = toString(values[0])
            this.setState({
                displayValue: values[0],
                values,
                clearDisplay: true,
                indice: e == '=' ? 0 : 1,
                operation: e == '=' ? null : e,
            })
        } else {
            this.setState({
                clearDisplay: true,
                indice: newIndice,
                operation: e,
            })
            
        }

    }

    clearAll = e => {
        this.setState({...stateInitial})
    }

    removeOne = () => {
        const indice = this.state.indice
        const values = this.state.values
        const value = values[indice]
        const typeValue = typeof(value)
        if (typeValue == 'string') {
            const newValue = value.substring(0, (value.length - 1))
            values[indice] = Number(newValue)
            this.setState({
                displayValue: newValue == '' ? '0' : newValue,
                values: values,
            })
        } else {
            const newValue = value.toString()
            const theValue = newValue.substring(0, (newValue.length - 1))
            values[indice] = Number(theValue)
            this.setState({
                displayValue: theValue == '' ? '0' : theValue,
                values: values,
            })  
        }
    }

    render() {
        return (
        <View>
            <Topo topoTitle='Calculadora' />
            <Display displayValue={this.state.displayValue} />
            <View style={styles.containerButtons}>
            <View style={styles.numbers}>
                <Numbers label='7' onClick={this.addNumber} />
                <Numbers label='8' onClick={this.addNumber} />
                <Numbers label='9' onClick={this.addNumber} />
                <Numbers label='4' onClick={this.addNumber} />
                <Numbers label='5' onClick={this.addNumber} />
                <Numbers label='6' onClick={this.addNumber} />
                <Numbers label='1' onClick={this.addNumber} />
                <Numbers label='2' onClick={this.addNumber} />
                <Numbers label='3' onClick={this.addNumber} />
                <Numbers label='.' onClick={this.addNumber} />
                <Numbers label='0' onClick={this.addNumber} />
                <Numbers label='=' onClick={this.addOperator} />
            </View>
            <View style={styles.operators}>
                <TouchableOpacity
                    onPress={this.removeOne}
                    onLongPress={this.clearAll}
                    style={styles.dell}>
                    <Text style={styles.dellText}>DEL</Text>
                </TouchableOpacity>
                <Operators label='/' onClick={this.addOperator} />
                <Operators label='*' onClick={this.addOperator} />
                <Operators label='-' onClick={this.addOperator} />
                <Operators label='+' onClick={this.addOperator} />
            </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: 'row',
  },
  numbers: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#CCC',
  },
  operators: {
    width: '20%',
  },
  buttons: {
    backgroundColor: '#EEE',
  },
  dell: {
    height: 81.2,
    backgroundColor: '#1C1C1C',
  },
  dellText: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 30,
    color: '#FFF',
  }
});