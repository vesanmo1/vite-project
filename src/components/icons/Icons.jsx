import './Icons.scss';

function Icons(props) {
  return ( 
        <svg className={`svg-icons ${props.className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30">
        <path d="M38.761,4.141l-3.464-3.434C34.82,0.236,34.244,0,33.565,0s-1.256,0.236-1.731,0.708l-16.706,16.59L7.641,9.849 C7.165,9.377,6.588,9.142,5.908,9.142c-0.678,0-1.255,0.236-1.731,0.707l-3.463,3.434C0.238,13.755,0,14.327,0,15 c0,0.674,0.238,1.247,0.714,1.718l9.217,9.141l3.466,3.434C13.871,29.764,14.448,30,15.128,30c0.679,0,1.256-0.236,1.732-0.708 l3.464-3.434L38.761,7.576c0.476-0.472,0.714-1.043,0.714-1.718C39.475,5.186,39.236,4.613,38.761,4.141z" fill="currentColor"/>
</svg>

  );
}
export default Icons;