import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './DatePicker.module.css';
import Button from 'react-bootstrap/Button';


const years = [];
for (let i = 1900; i <= 3000; i++) {
  years.push(i);
}
const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];





const DatePicker = ({setDate, setHide}) => {

  const dayRef = React.useRef();
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [month, setMonth] = React.useState(months[new Date().getMonth()]);
  const [day, setDay] = React.useState(new Date().getDate());

  return (
    <div className={styles.container} >
      <Form.Select defaultValue={year} onChange={(e) => setYear(e.target.value)}>
        <option value={-1}>Vyberte rok</option>
        {years.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </Form.Select>
      <Form.Select defaultValue={month} onChange={(e) => {
        setMonth(e.target.value);
        
      }}>
        <option value={-1} >Vyberte měsíc</option>
        {months.map((month, index) => (
          <option key={index}>{month}</option>
        ))}
      </Form.Select>
      <Form.Select ref={dayRef} defaultValue={day} id='curDay' onChange={(e) => setDay(e.target.value)}>
        <option value={-1}>Vyberte den</option>
        {[...Array(new Date(year, months.indexOf(month) + 1, 0).getDate()).keys()].map((day) => (
          <option key={day + 1}>{day + 1}</option>
        ))}
      </Form.Select>

      <Button className={styles.button} variant="primary"
        onClick={() => {
          if(year != -1 && month != -1 && dayRef.current.value != -1){
            setHide(false);
            setDate(new Date(year, months.indexOf(month), dayRef.current.value));
          }else{
            setHide(true);
          }
        }
        }
      >Vytvořit&nbsp;kalendář</Button>
    </div>
  )
}

export default DatePicker
