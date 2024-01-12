import React, { Component, ComponentType, FormEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface WithDataProps {
  onSendData: (data: any) => void;
}

function withData<T extends WithDataProps>(
  WrappedComponent: ComponentType<T & RouteComponentProps>
) {
  class WithData extends Component<T & RouteComponentProps> {
    API_KEY = import.meta.env.VITE_APP_NASA_API_KEY;

    fetchData = async (str: string) => {
      const { id, loading } = this.props;

      if (!loading) {
        if (str === 'id') {
          try {
            // Fetch data logic

            // Access onSendData from props to send data to the next route
            this.props.onSendData(data);

            // Access history from props to navigate to the next route
            this.props.history.push('/details');
          } catch (error) {
            // Handle error
          } finally {
            // Set loading to false
          }
        } else {
          // Handle random case
        }
      }
    };

    handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      this.fetchData('id');
    };

    render() {
      return <WrappedComponent {...this.props} onSubmit={this.handleSubmit} />;
    }
  }

  return withRouter(WithData);
}

interface FormInputProps extends WithDataProps {
  // Your existing component props here
}

interface FormInputState {
  id: string;
  loading: boolean;
}

class FormInput extends Component<FormInputProps, FormInputState> {
  constructor(props: FormInputProps) {
    super(props);
    this.state = {
      id: '',
      loading: false,
    };
  }

  render() {
    const { id, loading, onSendData } = this.props;

    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          {/* Your form content here */}
        </form>
      </div>
    );
  }
}

export default withData(FormInput);
