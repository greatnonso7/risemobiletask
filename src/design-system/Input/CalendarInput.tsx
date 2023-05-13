import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { formatDOB } from 'utils';
import dayjs from 'dayjs';
import { styles } from './styles';

interface CalendarProps {
  onChangeValue?: (val: string | Date) => void;
}

const CalendarInput = ({ onChangeValue }: CalendarProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const isSelected = selectedDate !== null;

  console.log(isSelected);

  return (
    <View>
      <DatePicker
        modal
        mode="date"
        theme="light"
        open={showModal}
        date={selectedDate}
        onConfirm={(
          date:
            | string
            | number
            | React.SetStateAction<Date>
            | dayjs.Dayjs
            | null
            | undefined,
        ) => {
          setShowModal(false);
          setSelectedDate(date);
          onChangeValue &&
            onChangeValue(dayjs(date).format('YYYY-MM-DDTHH:mm:ssZ'));
        }}
        onCancel={() => {
          setShowModal(false);
        }}
      />
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text style={[styles.textInput, !isSelected && styles.placeholderText]}>
          {!isSelected ? 'Select date' : `${formatDOB(selectedDate)}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarInput;
