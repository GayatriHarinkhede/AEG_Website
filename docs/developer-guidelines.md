# AEG Website - Developer Guidelines

## Guidelines Overview

This document provides comprehensive guidelines for developers working on the AEG website project, including best practices, coding standards, and learning resources.

## Code Standards

### 1. File Naming Conventions

```
✅ Good Examples:
- HomePage.jsx          (React components)
- ContactForm.jsx       (React components)
- api.js               (Utility files)
- constants.js         (Configuration files)
- useScrollNavigation.js (Custom hooks)

❌ Bad Examples:
- home.js              (Not descriptive)
- ContactForm.js       (Should be .jsx for React)
- CONSTANTS.JS         (All caps)
- use-scroll-navigation.js (Kebab case)
```

### 2. Component Structure

```jsx
// Standard React Component Template
import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils/helpers';

/**
 * ComponentName - Brief description of what this component does
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {ReactNode} props.children - Child components
 */
const ComponentName = ({ 
  className, 
  children, 
  ...props 
}) => {
  return (
    <div 
      className={cn("base-classes", className)}
      {...props}
    >
      {children}
    </div>
  );
};

ComponentName.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ComponentName.defaultProps = {
  className: '',
  children: null,
};

export default ComponentName;
```

### 3. Import Organization

```jsx
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// 3. Internal components
import { Button, Card } from '../components/ui';
import { Header, Footer } from '../components/layout';

// 4. Hooks and utilities
import { useScrollNavigation } from '../hooks';
import { cn } from '../utils/helpers';

// 5. Assets and styles
import logo from '../assets/images/logo.png';
import './Component.css';
```

### 4. State Management

```jsx
// ✅ Good: Use custom hooks for complex state logic
const useFormState = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  return { values, errors, handleChange };
};

// ❌ Bad: Complex state logic in component
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  // ... lots of state logic
};
```

## Best Practices

### 1. Performance Optimization

```jsx
// ✅ Lazy loading for pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// ✅ Memoization for expensive calculations
const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => heavyCalculation(item));
  }, [data]);
  
  return <div>{processedData}</div>;
});

// ✅ Debouncing for search inputs
const SearchInput = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (debouncedQuery) {
      performSearch(debouncedQuery);
    }
  }, [debouncedQuery]);
  
  return <input onChange={(e) => setQuery(e.target.value)} />;
};
```

### 2. Error Handling

```jsx
// ✅ Proper error boundaries
<ErrorBoundary fallback={<ErrorFallback />}>
  <SuspiciousComponent />
</ErrorBoundary>

// ✅ API error handling
const fetchData = async () => {
  try {
    const response = await api.getData();
    setData(response.data);
  } catch (error) {
    setError(error.message);
    // Log error for monitoring
    console.error('API Error:', error);
  }
};

// ✅ Form validation
const validateForm = (values) => {
  const errors = {};
  
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  
  return errors;
};
```

### 3. Accessibility

```jsx
// ✅ Semantic HTML
<button 
  aria-label="Close modal"
  onClick={handleClose}
  className="close-button"
>
  <X size={24} />
</button>

// ✅ Form accessibility
<div className="form-group">
  <label htmlFor="email">Email Address</label>
  <input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    aria-describedby="email-error"
    aria-invalid={!!emailError}
  />
  {emailError && (
    <div id="email-error" role="alert" className="error-message">
      {emailError}
    </div>
  )}
</div>

// ✅ Keyboard navigation
const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);
  
  return isOpen ? <div role="dialog" aria-modal="true">...</div> : null;
};
```

## Testing Guidelines

### 1. Unit Tests

```jsx
// Component testing
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(<Button className="custom">Click me</Button>);
    expect(screen.getByText('Click me')).toHaveClass('custom');
  });
});
```

### 2. Integration Tests

```jsx
// Testing user flows
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContactPage from '../ContactPage';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Contact Form Flow', () => {
  test('submits form with valid data', async () => {
    const mockSubmit = jest.fn();
    renderWithRouter(<ContactPage onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Test message' }
    });
    
    fireEvent.click(screen.getByText('Send Message'));
    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message'
      });
    });
  });
});
```

## CSS & Styling Guidelines

### 1. Tailwind CSS Best Practices

```jsx
// ✅ Use Tailwind utility classes
<button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
  Click me
</button>

// ✅ Use cn() utility for conditional classes
<div className={cn(
  "base-classes",
  "hover:shadow-lg",
  isActive && "bg-blue-100",
  className
)}>
  Content
</div>

// ✅ Create component variants
const buttonVariants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700"
};

<button className={cn("px-4 py-2 rounded", buttonVariants[variant])}>
  {children}
</button>
```

### 2. Responsive Design

```jsx
// ✅ Mobile-first approach
<div className="
  text-sm           // Mobile
  md:text-base      // Tablet
  lg:text-lg        // Desktop
  xl:text-xl        // Large desktop
">
  Responsive text
</div>

// ✅ Responsive grid
<div className="
  grid 
  grid-cols-1       // 1 column on mobile
  md:grid-cols-2    // 2 columns on tablet
  lg:grid-cols-3    // 3 columns on desktop
  gap-4
">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

## Learning Path for Fresh Developers

### 1. Foundation Skills (Weeks 1-2)

**JavaScript Fundamentals**
- ES6+ features (arrow functions, destructuring, modules)
- Async/await and Promises
- Array methods (map, filter, reduce)
- Object manipulation

**React Basics**
- Component lifecycle
- Hooks (useState, useEffect, useContext)
- Event handling
- Conditional rendering

**Resources:**
- [React Documentation](https://reactjs.org/docs)
- [JavaScript.info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/)

### 2. Intermediate Skills (Weeks 3-4)

**React Advanced**
- Custom hooks
- Context API
- Performance optimization (memo, useMemo, useCallback)
- Error boundaries

**Development Tools**
- ESLint and Prettier
- React Developer Tools
- Git workflows
- Package management

**Resources:**
- [React Patterns](https://reactpatterns.com/)
- [Kent C. Dodds Blog](https://kentcdodds.com/blog)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### 3. Advanced Skills (Weeks 5-8)

**Performance & Architecture**
- Code splitting and lazy loading
- Bundle analysis
- Server-side rendering concepts
- State management patterns

**Testing & Quality**
- Unit testing with Jest
- Integration testing
- Test-driven development
- Code coverage

**Resources:**
- [React Performance](https://web.dev/react/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Web Performance](https://web.dev/performance/)

## Development Workflow

### 1. Daily Workflow

```bash
# 1. Start fresh
git pull origin main
npm install

# 2. Create feature branch
git checkout -b feature/component-name

# 3. Development cycle
npm start           # Start development server
npm run lint        # Check code quality
npm run format      # Format code
npm test           # Run tests

# 4. Commit changes
git add .
git commit -m "feat: add new component with tests"

# 5. Push and create PR
git push origin feature/component-name
```

### 2. Code Review Checklist

**Before Submitting PR:**
- [ ] All tests passing
- [ ] ESLint errors fixed
- [ ] Code formatted with Prettier
- [ ] Components documented
- [ ] Accessibility considered
- [ ] Performance impact assessed

**Review Criteria:**
- [ ] Code follows established patterns
- [ ] Proper error handling
- [ ] Responsive design implemented
- [ ] Tests cover main functionality
- [ ] No console.log statements
- [ ] Import statements organized

### 3. Git Commit Messages

```bash
# ✅ Good commit messages
feat: add user authentication component
fix: resolve memory leak in carousel
docs: update component documentation
refactor: extract form validation logic
test: add unit tests for Button component

# ❌ Bad commit messages
update stuff
fix bug
changes
wip
```

## Common Pitfalls to Avoid

### 1. Performance Issues

```jsx
// ❌ Bad: Inline object creation
<Component style={{marginTop: '20px'}} />

// ✅ Good: Define outside render
const styles = { marginTop: '20px' };
<Component style={styles} />

// ❌ Bad: Missing dependency array
useEffect(() => {
  fetchData();
}, []); // Missing dependency

// ✅ Good: Proper dependencies
useEffect(() => {
  fetchData();
}, [userId]); // Include all dependencies
```

### 2. State Management

```jsx
// ❌ Bad: Direct state mutation
const handleUpdate = () => {
  items.push(newItem);
  setItems(items);
};

// ✅ Good: Immutable updates
const handleUpdate = () => {
  setItems(prev => [...prev, newItem]);
};
```

### 3. Error Handling

```jsx
// ❌ Bad: No error handling
const fetchData = async () => {
  const response = await api.getData();
  setData(response.data);
};

// ✅ Good: Proper error handling
const fetchData = async () => {
  try {
    setLoading(true);
    const response = await api.getData();
    setData(response.data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
```

## Resources & Tools

### Essential Tools
- **VS Code** - Primary editor
- **React Developer Tools** - Browser extension
- **Chrome DevTools** - Performance monitoring
- **Postman** - API testing
- **Git** - Version control

### VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint - Code quality
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

### Learning Resources
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Testing Library Documentation](https://testing-library.com/)
- [Web.dev](https://web.dev/) - Performance and best practices

---

**Last Updated:** 2024  
**Target Audience:** Fresh to intermediate developers  
**Review Schedule:** Monthly updates 