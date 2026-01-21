import type { SpringOptions } from 'motion/react';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Star } from 'lucide-react';

interface FeedbackCardProps {
  profileImage: React.ComponentProps<'img'>['src'];
  name: string;
  role: string;
  company?: string;
  feedback: string;
  rating?: number;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  onClick?: () => void;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function FeedbackCard({
  profileImage,
  name,
  role,
  company = '',
  feedback,
  rating = 15,
  scaleOnHover = 1.15,
  rotateAmplitude = 10,
  onClick
}: FeedbackCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-sm [perspective:800px] cursor-pointer"
      style={{
        rotateX,
        rotateY,
        scale
      }}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white rounded-[15px] p-6 shadow-lg hover:shadow-xl transition-shadow will-change-transform [transform:translateZ(0)]">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={profileImage}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
          />
          <div className="flex flex-col items-start flex-1">
            <h3 className="font-semibold text-gray-900 text-base text-left">{name}</h3>
            <p className="text-sm text-gray-600 text-left">{role}</p>
            {company && <p className="text-xs text-gray-500 text-left">{company}</p>}
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
          "{feedback}"
        </p>

        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
          <div className="text-blue-600 font-semibold text-xs">
            LinkedIn
          </div>
        </div>
      </div>
    </motion.div>
  );
}
