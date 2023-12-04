import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import Login from './Loign';


// Configure Enzyme for the appropriate React Adapter
Enzyme.configure({ adapter : new Adapter() });

// 1. Testing Component
it('should render component without crashing', () => {    
    const wrapper = shallow( <Login /> );   
    const inputCount =  wrapper.find("input").length;
    expect(inputCount).toBe(3);
});


// 2. Testing input elements --- getting data from input
it('should user id textbox empty by default', () => {    
    const wrapper = shallow(<Login />);
    let str  = wrapper.find("#t1").props().value;
    expect(str).toBe("");
});
  

// 3. Testing input elements --- setting data to input
it('should set the correct value to input element', () => {    
    const wrapper = shallow(<Login />);
   // wrapper.find("#t1").props().value  = "Stephen";   // not allowed, value is read-only
    wrapper.find("#t1").simulate("change", { target : { value : "Stephen"} });
    let str  = wrapper.find("#t1").props().value;   
    expect(str).toBe("Stephen");
});


// 4. Testing button click -- with state values
it('should render valid message after click login button --- for valid user', () => {    
    const wrapper = shallow(<Login />);
    wrapper.find("#t1").simulate("change", { target : { value : "admin"} });
    wrapper.find("#t2").simulate("change", { target : { value : "admin123"} });
    wrapper.find("#b1").simulate("click"); 
    let str  = wrapper.find("#result").text();    
    expect(str).toBe("Welcome to Admin");
});


// 5. Testing button click -- for invalid user
it('should render error message after click login button --- for invalid user', () => {    
    const wrapper = shallow(<Login />);
    wrapper.find("#t1").simulate("change", { target : { value : "scott"} });
    wrapper.find("#t2").simulate("change", { target : { value : "hello"} });
    wrapper.find("#b1").simulate("click"); 
    let str  = wrapper.find("#result").text();    
    expect(str).toBe("Invalid User Id or Password");
});
