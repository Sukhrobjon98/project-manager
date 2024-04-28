import NoProjectImg from '../assets/no-projects-4064370-3363931.webp';
import Button from './Button';
export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={NoProjectImg} alt="an empty task list" className='w-40 h-40 object-contain mx-auto' />
      <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
      <p className='text-stone-400 mb-4'>Select a project or get started with new one</p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
