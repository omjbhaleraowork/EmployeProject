import Alert from 'react-bootstrap/Alert';

function UpdateAlert() {
  return (
    <>
      {[
        
        'success',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
           Congrates!!!! Employe Updated successfully {' '}
          <Alert.Link href="/"> Go Back to Home page</Alert.Link>
        
        </Alert>
      ))}
    </>
  );
}

export default UpdateAlert;