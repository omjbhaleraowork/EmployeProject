import Alert from 'react-bootstrap/Alert';

function LinksExample() {
  return (
    <>
      {[
        
        'success',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
           Congrates!!!! Employe created successfully {' '}
          <Alert.Link href="/"> Go Back to Home page</Alert.Link>
        
        </Alert>
      ))}
    </>
  );
}

export default LinksExample;